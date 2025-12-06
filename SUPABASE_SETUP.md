# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key to `.env.local`

## 2. Database Schema

Run these SQL commands in the Supabase SQL Editor:

### Create Tables

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Roles Table
CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  rate_min INTEGER NOT NULL,
  rate_max INTEGER NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  specialty TEXT NOT NULL,
  posted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'filled', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Profiles Table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  bio TEXT,
  linkedin TEXT,
  github TEXT,
  portfolio TEXT,
  specialties TEXT[] DEFAULT '{}',
  years_experience INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Applications Table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE NOT NULL,
  resume_url TEXT NOT NULL,
  cover_letter TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected')),
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role_id)
);

-- Create indexes for better performance
CREATE INDEX idx_roles_status ON roles(status);
CREATE INDEX idx_roles_specialty ON roles(specialty);
CREATE INDEX idx_applications_user_id ON applications(user_id);
CREATE INDEX idx_applications_role_id ON applications(role_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers to update updated_at
CREATE TRIGGER update_roles_updated_at
  BEFORE UPDATE ON roles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### Insert Sample Data

**Option 1: Quick Insert (run the SQL file)**

You can use the detailed insert script provided in `insert_roles.sql` which includes comprehensive descriptions and requirements.

**Option 2: Run this SQL directly in Supabase SQL Editor**

```sql
-- Insert the 6 roles matching the original design
INSERT INTO roles (title, rate_min, rate_max, description, requirements, specialty, status) VALUES
(
  'Radiology Expert',
  180,
  280,
  'Review and annotate radiological images for AI training datasets. Work with cutting-edge medical imaging AI systems to help improve diagnostic accuracy and support the development of next-generation radiology tools.',
  ARRAY[
    'Board certified radiologist with active medical license',
    'Minimum 5 years of clinical radiology experience',
    'Proficiency in DICOM and medical imaging standards',
    'Experience with chest X-rays, CT, and MRI interpretation',
    'Strong attention to detail and quality control',
    'Ability to work independently on remote annotation projects'
  ],
  'Radiology',
  'active'
),
(
  'Pathology Specialist',
  200,
  350,
  'Annotate pathology slides and validate AI predictions for digital pathology systems. Help train machine learning models to recognize various tissue types, cellular abnormalities, and disease markers.',
  ARRAY[
    'MD with pathology board certification',
    'Minimum 7 years of anatomic or clinical pathology experience',
    'Experience with digital pathology and whole slide imaging',
    'Strong background in histopathology and cytology',
    'Research experience in AI/ML applications preferred',
    'Excellent visual pattern recognition skills'
  ],
  'Pathology',
  'active'
),
(
  'Cardiology Annotator',
  175,
  275,
  'Label ECG data and cardiac imaging for machine learning models. Support the development of AI systems for early detection of cardiac conditions and rhythm abnormalities.',
  ARRAY[
    'Board certified cardiologist or cardiology fellowship completion',
    'Minimum 3 years of clinical cardiology experience',
    'Expert-level ECG interpretation skills',
    'Experience with echocardiography and cardiac imaging',
    'Familiarity with cardiac rhythm analysis',
    'Interest in medical AI and technology'
  ],
  'Cardiology',
  'active'
),
(
  'Clinical Notes Expert',
  150,
  250,
  'Structure and validate clinical documentation for natural language processing training. Help AI systems understand medical terminology, clinical reasoning, and documentation patterns.',
  ARRAY[
    'Active medical license (MD, DO, or equivalent)',
    'Minimum 3 years of clinical documentation experience',
    'Strong understanding of medical terminology and ICD coding',
    'Experience with electronic health records (EHR)',
    'Excellent written communication and attention to detail',
    'Understanding of clinical workflows and documentation standards'
  ],
  'Clinical Documentation',
  'active'
),
(
  'Dermatology Expert',
  160,
  260,
  'Classify skin lesions and validate dermatology AI outputs. Work with state-of-the-art computer vision systems to improve accuracy in skin cancer detection and dermatological diagnosis.',
  ARRAY[
    'Board certified dermatologist',
    'Minimum 4 years of clinical dermatology experience',
    'Expertise in dermoscopy and skin lesion analysis',
    'Experience with melanoma and skin cancer screening',
    'Research interest in dermatology AI applications',
    'Strong visual diagnostic skills'
  ],
  'Dermatology',
  'active'
),
(
  'Oncology Protocol Expert',
  300,
  450,
  'Design and validate cancer treatment protocols for AI-powered clinical decision support systems. Help create intelligent treatment planning tools that assist oncologists with evidence-based care recommendations.',
  ARRAY[
    'Board certified medical oncologist',
    'Minimum 10 years of oncology practice experience',
    'Extensive clinical trial experience and protocol development',
    'Deep knowledge of NCCN guidelines and evidence-based oncology',
    'Experience with treatment planning and multidisciplinary care',
    'Strong analytical and critical thinking skills',
    'Leadership experience in academic or clinical oncology'
  ],
  'Oncology',
  'active'
);
```

## 3. Row Level Security (RLS)

Enable RLS and set policies:

```sql
-- Enable RLS
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Roles policies (public read, admin write)
CREATE POLICY "Roles are viewable by everyone"
  ON roles FOR SELECT
  USING (status = 'active');

CREATE POLICY "Roles can be inserted by authenticated users"
  ON roles FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- User profiles policies
CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Applications policies
CREATE POLICY "Users can view their own applications"
  ON applications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own applications"
  ON applications FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications"
  ON applications FOR UPDATE
  USING (auth.uid() = user_id);

-- Admin policies (optional - create admin role later)
CREATE POLICY "Admins can view all applications"
  ON applications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_id = auth.uid()
      AND email LIKE '%@moccet-labs.com'
    )
  );
```

## 4. Storage Setup

Create a bucket for resume uploads:

1. Go to Storage in Supabase Dashboard
2. Create a new bucket named `resumes`
3. Set it to **private** (not public)
4. Add the following policy:

```sql
-- Allow authenticated users to upload their own resumes
CREATE POLICY "Users can upload their own resumes"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'resumes' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow users to read their own resumes
CREATE POLICY "Users can read their own resumes"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'resumes' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow admins to read all resumes
CREATE POLICY "Admins can read all resumes"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'resumes' AND
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_id = auth.uid()
      AND email LIKE '%@moccet-labs.com'
    )
  );
```

## 5. Functions (Optional)

Create a function to auto-create user profile on signup:

```sql
-- Function to create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

## 6. Environment Variables

Update your `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SLACK_WEBHOOK_URL=your-slack-webhook-url
```

## 7. Slack Webhook Setup

1. Go to your Slack workspace
2. Create a new app or use existing
3. Enable Incoming Webhooks
4. Create a webhook for your desired channel
5. Copy the webhook URL to `.env.local`

## Testing

After setup, you can test with:

1. Sign up a new user
2. Check that `user_profiles` table has a new row
3. Browse roles
4. Submit an application
5. Check Slack for notification
6. Verify resume uploaded to storage
