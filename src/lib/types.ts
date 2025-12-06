// Database Types
export interface Role {
  id: string;
  title: string;
  rate_min: number;
  rate_max: number;
  description: string;
  requirements: string[];
  specialty: string;
  posted_at: string;
  status: 'active' | 'filled' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  phone?: string;
  bio?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  specialties?: string[];
  years_experience?: number;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: string;
  user_id: string;
  role_id: string;
  resume_url: string;
  cover_letter?: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  applied_at: string;
  updated_at: string;
  // Joined data
  role?: Role;
  user_profile?: UserProfile;
}

// Form Types
export interface ApplicationFormData {
  full_name: string;
  email: string;
  phone: string;
  cover_letter: string;
  resume: File | null;
}

export interface ProfileFormData {
  full_name: string;
  phone: string;
  bio: string;
  linkedin: string;
  github: string;
  portfolio: string;
  specialties: string[];
  years_experience: number;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  password: string;
  full_name: string;
  confirmPassword: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Slack Notification Types
export interface SlackNotificationPayload {
  applicant_name: string;
  applicant_email: string;
  applicant_phone?: string;
  role_title: string;
  role_rate: string;
  resume_url: string;
  applied_at: string;
  application_id: string;
  metadata?: {
    user_agent?: string;
    ip_address?: string;
    referrer?: string;
  };
}

// Component Props Types
export interface RoleCardProps {
  title: string;
  rate: string;
  postedTime: string;
  avatars: Avatar[];
  hiredCount: number;
  roleId?: string;
}

export interface Avatar {
  id: number;
  color: string;
}
