# moccet Labs - Medical AI Expert Network

A Next.js 14 application for connecting medical experts with AI training and annotation projects. Built with Supabase, TypeScript, and Tailwind CSS.

## Features

### Authentication & User Management
- ✅ Full authentication system (signup/login/logout)
- ✅ User profiles with professional information
- ✅ Protected routes with middleware
- ✅ Role-based access control (admin dashboard)

### Role Application System
- ✅ Dynamic role listings from database
- ✅ Detailed role pages with requirements
- ✅ Complete application flow with resume upload
- ✅ Application status tracking
- ✅ User dashboard to view all applications
- ✅ Admin dashboard to manage applications

### Slack Notifications
- ✅ Real-time Slack notifications on new applications
- ✅ Rich message formatting with applicant details
- ✅ Resume download links
- ✅ Application metadata (timestamp, IP, user agent)

### File Management
- ✅ Secure resume uploads to Supabase Storage
- ✅ Drag-and-drop file upload component
- ✅ File validation (type, size)
- ✅ Private storage with proper access controls

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Notifications**: Slack Webhooks
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account
- A Slack workspace (for notifications)

### 1. Clone and Install

```bash
git clone <your-repo>
cd moccet-labs
npm install
```

### 2. Supabase Setup

Follow the complete setup guide in `SUPABASE_SETUP.md`:

1. Create a new Supabase project
2. Run the SQL schema from `SUPABASE_SETUP.md`
3. Create the `resumes` storage bucket
4. Set up Row Level Security policies
5. Enable the database trigger for auto-profile creation

### 3. Slack Webhook Setup

1. Go to your Slack workspace settings
2. Create a new app or use an existing one
3. Enable "Incoming Webhooks"
4. Create a webhook for your desired channel
5. Copy the webhook URL

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

Get these values from:
- Supabase Dashboard → Settings → API
- Slack App Settings → Incoming Webhooks

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
moccet-labs/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── applications/submit/route.ts  # Application submission
│   │   │   └── roles/
│   │   │       ├── route.ts                   # Get all roles
│   │   │       └── [id]/route.ts              # Get single role
│   │   ├── auth/
│   │   │   ├── login/page.tsx                 # Login page
│   │   │   └── signup/page.tsx                # Signup page
│   │   ├── dashboard/
│   │   │   └── applications/page.tsx          # User applications
│   │   ├── admin/
│   │   │   └── applications/page.tsx          # Admin dashboard
│   │   ├── roles/
│   │   │   └── [id]/page.tsx                  # Role detail page
│   │   ├── all-roles/page.tsx                 # Browse all roles
│   │   ├── profile/page.tsx                   # User profile
│   │   ├── layout.tsx                         # Root layout
│   │   └── page.tsx                           # Homepage
│   ├── components/
│   │   ├── ApplicationForm.tsx                # Apply to role form
│   │   ├── AuthProvider.tsx                   # Auth context
│   │   ├── FileUpload.tsx                     # File upload component
│   │   ├── LatestRoles.tsx                    # Homepage role list
│   │   ├── Navigation.tsx                     # Main navigation
│   │   ├── RoleCard.tsx                       # Role card component
│   │   ├── BenchmarkSection.tsx               # Benchmark display
│   │   ├── HeroSection.tsx                    # Hero section
│   │   ├── Footer.tsx                         # Footer
│   │   └── ModelRow.tsx                       # Model row component
│   └── lib/
│       ├── supabase/
│       │   ├── client.ts                      # Client-side Supabase
│       │   ├── server.ts                      # Server-side Supabase
│       │   └── middleware.ts                  # Auth middleware
│       ├── slack.ts                           # Slack notifications
│       └── types.ts                           # TypeScript types
├── middleware.ts                              # Next.js middleware
├── .env.local                                 # Environment variables
├── SUPABASE_SETUP.md                          # Database setup guide
└── README.md                                  # This file
```

## Key Features Explained

### Application Flow

1. User browses available roles
2. Clicks "Apply" on a role
3. If not authenticated, redirected to login/signup
4. Fills out application form with resume upload
5. Submits application
6. Resume uploaded to Supabase Storage
7. Application record created in database
8. Slack notification sent to team
9. User redirected to dashboard to track application

### Authentication Flow

1. User signs up with email/password
2. Supabase creates auth user
3. Database trigger auto-creates user profile
4. User can update profile with additional info
5. Protected routes check auth status via middleware
6. Admin users (ending in @moccet-labs.com) get special access

### Slack Notifications

When a user submits an application, a rich Slack message is sent including:
- Applicant name, email, phone
- Role title and rate range
- Resume download link
- Application timestamp
- Metadata (IP address, user agent, referrer)
- CTA button to review application

## Database Schema

### Tables

- **roles**: Available positions
- **user_profiles**: Extended user information
- **applications**: Job applications linking users to roles

See `SUPABASE_SETUP.md` for complete schema and setup instructions.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
vercel --prod
```

### Post-Deployment

1. Update Supabase allowed URLs
2. Update Slack webhook if needed
3. Test the full application flow

## Admin Access

Users with email addresses ending in `@moccet-labs.com` automatically get admin access to:
- View all applications from all users
- See detailed applicant information
- Access admin dashboard at `/admin/applications`

## Security Features

- Row Level Security (RLS) on all tables
- Private resume storage with access policies
- Protected routes via middleware
- Input validation with Zod
- File type and size validation
- CSRF protection via Supabase

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit
```

## Troubleshooting

### Common Issues

**Issue**: "Unauthorized" error when applying
- **Solution**: Make sure you're logged in and .env.local has correct Supabase keys

**Issue**: Resume upload fails
- **Solution**: Check that the `resumes` bucket exists and has proper policies

**Issue**: Slack notifications not working
- **Solution**: Verify SLACK_WEBHOOK_URL in .env.local is correct

**Issue**: Can't access admin dashboard
- **Solution**: Admin access requires email ending in @moccet-labs.com

**Issue**: Database queries fail
- **Solution**: Run all SQL from SUPABASE_SETUP.md in correct order

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT

## Support

For issues or questions, please open a GitHub issue or contact the team.
