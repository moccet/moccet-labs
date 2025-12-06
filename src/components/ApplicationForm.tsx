'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FileUpload from '@/components/FileUpload';
import { Role } from '@/lib/types';

const applicationSchema = z.object({
  cover_letter: z.string().min(50, 'Cover letter must be at least 50 characters').optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  role: Role;
}

export default function ApplicationForm({ role }: ApplicationFormProps) {
  const router = useRouter();
  const { user, profile } = useAuth();
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!user) {
      router.push(`/auth/login?redirectTo=/roles/${role.id}`);
      return;
    }

    if (!resume) {
      setError('Please upload your resume');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('role_id', role.id);
      formData.append('resume', resume);
      if (data.cover_letter) {
        formData.append('cover_letter', data.cover_letter);
      }

      const response = await fetch('/api/applications/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/applications');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to apply?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Sign in or create an account to apply for this role.
        </p>
        <button
          onClick={() => router.push(`/auth/login?redirectTo=/roles/${role.id}`)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors mb-2"
        >
          Sign In
        </button>
        <button
          onClick={() => router.push(`/auth/signup?redirectTo=/roles/${role.id}`)}
          className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors"
        >
          Create Account
        </button>
      </div>
    );
  }

  if (success) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-green-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submitted!</h3>
          <p className="text-sm text-gray-600">
            Redirecting to your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this role</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Profile
          </label>
          <div className="bg-gray-50 rounded-md p-3 text-sm">
            <p className="font-medium text-gray-900">{profile?.full_name}</p>
            <p className="text-gray-600">{user.email}</p>
            {profile?.phone && <p className="text-gray-600">{profile.phone}</p>}
          </div>
          <button
            type="button"
            onClick={() => router.push('/profile')}
            className="mt-2 text-sm text-blue-600 hover:text-blue-700"
          >
            Edit profile
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resume / CV *
          </label>
          <FileUpload
            onFileSelect={setResume}
            accept=".pdf,.doc,.docx"
            maxSizeMB={5}
          />
        </div>

        <div>
          <label htmlFor="cover_letter" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Letter (Optional)
          </label>
          <textarea
            {...register('cover_letter')}
            id="cover_letter"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Tell us why you're a great fit for this role..."
          />
          {errors.cover_letter && (
            <p className="mt-1 text-sm text-red-600">{errors.cover_letter.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !resume}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to our terms and privacy policy
        </p>
      </form>
    </div>
  );
}
