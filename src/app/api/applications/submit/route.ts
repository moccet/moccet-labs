import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { sendSlackNotification } from '@/lib/slack';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Check authentication
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const roleId = formData.get('role_id') as string;
    const resume = formData.get('resume') as File;
    const coverLetter = formData.get('cover_letter') as string | null;

    if (!roleId || !resume) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user has already applied for this role
    const { data: existingApplication } = await supabase
      .from('applications')
      .select('id')
      .eq('user_id', user.id)
      .eq('role_id', roleId)
      .single();

    if (existingApplication) {
      return NextResponse.json(
        { success: false, error: 'You have already applied for this role' },
        { status: 400 }
      );
    }

    // Get user profile
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json(
        { success: false, error: 'User profile not found' },
        { status: 404 }
      );
    }

    // Get role details
    const { data: role, error: roleError } = await supabase
      .from('roles')
      .select('*')
      .eq('id', roleId)
      .single();

    if (roleError || !role) {
      return NextResponse.json(
        { success: false, error: 'Role not found' },
        { status: 404 }
      );
    }

    // Upload resume to Supabase Storage
    const fileExt = resume.name.split('.').pop();
    const fileName = `${user.id}/${roleId}-${Date.now()}.${fileExt}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(fileName, resume, {
        contentType: resume.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { success: false, error: 'Failed to upload resume' },
        { status: 500 }
      );
    }

    // Get public URL for the resume
    const {
      data: { publicUrl },
    } = supabase.storage.from('resumes').getPublicUrl(fileName);

    // Create application record
    const { data: application, error: applicationError } = await supabase
      .from('applications')
      .insert({
        user_id: user.id,
        role_id: roleId,
        resume_url: publicUrl,
        cover_letter: coverLetter,
        status: 'pending',
      })
      .select()
      .single();

    if (applicationError) {
      console.error('Application error:', applicationError);
      return NextResponse.json(
        { success: false, error: 'Failed to create application' },
        { status: 500 }
      );
    }

    // Send Slack notification (non-blocking)
    sendSlackNotification({
      applicant_name: profile.full_name,
      applicant_email: profile.email,
      applicant_phone: profile.phone || undefined,
      role_title: role.title,
      role_rate: `$${role.rate_min}-$${role.rate_max}/hr`,
      resume_url: publicUrl,
      applied_at: application.applied_at,
      application_id: application.id,
      metadata: {
        user_agent: request.headers.get('user-agent') || undefined,
        ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
        referrer: request.headers.get('referer') || undefined,
      },
    }).catch((err) => {
      console.error('Slack notification failed:', err);
      // Don't fail the request if Slack fails
    });

    return NextResponse.json({
      success: true,
      data: application,
      message: 'Application submitted successfully',
    });
  } catch (error: any) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
