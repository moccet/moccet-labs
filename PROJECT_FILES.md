# Project Files Overview

Complete guide to all files in the moccet Labs project.

## 📚 Documentation Files

### Getting Started
- **`README.md`** - Main project documentation with complete overview
- **`QUICK_START.md`** - 20-minute setup guide to get running fast
- **`IMPLEMENTATION_SUMMARY.md`** - What was built and technical details

### Setup Guides
- **`SUPABASE_SETUP.md`** - Complete database setup with SQL scripts
- **`SLACK_SETUP.md`** - Step-by-step Slack integration guide
- **`DEPLOYMENT_CHECKLIST.md`** - Production deployment checklist

### Data
- **`insert_roles.sql`** - SQL script to insert the 6 roles from design

## 🗂️ Project Structure

### Configuration Files
```
.env.local              # Environment variables (your Supabase + Slack keys)
.env.local.example      # Template for environment variables
.gitignore              # Git ignore patterns
next.config.mjs         # Next.js configuration
tailwind.config.ts      # Tailwind CSS configuration
tsconfig.json           # TypeScript configuration
package.json            # Dependencies and scripts
```

### Source Code Structure
```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with AuthProvider
│   ├── page.tsx                  # Homepage
│   │
│   ├── api/                      # API Routes
│   │   ├── roles/
│   │   │   ├── route.ts          # GET all roles
│   │   │   └── [id]/route.ts     # GET single role
│   │   └── applications/
│   │       └── submit/route.ts   # POST submit application
│   │
│   ├── auth/                     # Authentication pages
│   │   ├── login/page.tsx        # Login page
│   │   └── signup/page.tsx       # Signup page
│   │
│   ├── roles/                    # Role pages
│   │   └── [id]/page.tsx         # Individual role detail
│   │
│   ├── all-roles/                # Browse all roles
│   │   └── page.tsx
│   │
│   ├── profile/                  # User profile
│   │   └── page.tsx
│   │
│   ├── dashboard/                # User dashboard
│   │   └── applications/page.tsx # Track applications
│   │
│   └── admin/                    # Admin section
│       └── applications/page.tsx # View all applications
│
├── components/                   # React components
│   ├── AuthProvider.tsx          # Auth context and state
│   ├── Navigation.tsx            # Top navigation bar
│   ├── ApplicationForm.tsx       # Apply to role form
│   ├── FileUpload.tsx            # Resume upload component
│   ├── LatestRoles.tsx           # Homepage role grid
│   ├── RoleCard.tsx              # Role card component
│   ├── HeroSection.tsx           # Homepage hero
│   ├── BenchmarkSection.tsx      # AI benchmark display
│   ├── ModelRow.tsx              # Benchmark row
│   └── Footer.tsx                # Site footer
│
└── lib/                          # Utilities and helpers
    ├── types.ts                  # TypeScript type definitions
    ├── slack.ts                  # Slack notification service
    └── supabase/                 # Supabase utilities
        ├── client.ts             # Client-side Supabase
        ├── server.ts             # Server-side Supabase
        └── middleware.ts         # Auth middleware utilities

middleware.ts                     # Next.js route protection
```

## 📄 File Descriptions

### Core Application Files

#### `src/app/layout.tsx`
- Root layout component
- Wraps app with AuthProvider
- Configures fonts (Inter, JetBrains Mono)
- Sets metadata

#### `src/app/page.tsx`
- Homepage with hero section
- Statistics display
- Latest roles grid
- AI benchmark section

### Authentication Files

#### `src/components/AuthProvider.tsx`
- React Context for auth state
- Manages user and profile data
- Provides auth methods
- Listens to auth state changes

#### `src/app/auth/login/page.tsx`
- Email/password login form
- Form validation with Zod
- Error handling
- Redirect after login

#### `src/app/auth/signup/page.tsx`
- User registration form
- Password confirmation
- Auto-creates profile via trigger
- Redirects to dashboard

### Role Management Files

#### `src/app/api/roles/route.ts`
- GET endpoint for all roles
- Filters by status='active'
- Optional limit parameter
- Returns JSON

#### `src/app/api/roles/[id]/route.ts`
- GET endpoint for single role
- Returns 404 if not found
- Server-side rendering

#### `src/app/roles/[id]/page.tsx`
- Role detail page
- Shows full description
- Lists requirements
- Displays specialty
- Includes ApplicationForm

#### `src/components/LatestRoles.tsx`
- Fetches 6 latest roles from DB
- Displays in grid layout
- Server component (SSR)
- Time ago calculation

#### `src/components/RoleCard.tsx`
- Individual role card UI
- Links to role detail
- Apply button
- Avatar display

### Application System Files

#### `src/components/ApplicationForm.tsx`
- Complete application form
- Resume file upload
- Cover letter field
- Auto-fills user profile
- Validates before submit
- Shows success state

#### `src/components/FileUpload.tsx`
- Drag-and-drop file upload
- File validation (type, size)
- Visual file preview
- Remove functionality
- Error messages

#### `src/app/api/applications/submit/route.ts`
- POST endpoint for applications
- Checks duplicate applications
- Uploads resume to Storage
- Creates application record
- Sends Slack notification
- Returns application data

### Dashboard Files

#### `src/app/dashboard/applications/page.tsx`
- User's application list
- Status indicators
- Application details
- Resume links
- Statistics

#### `src/app/admin/applications/page.tsx`
- Admin-only dashboard
- All applications from all users
- Statistics cards
- Applicant details
- Email @moccet-labs.com required

### Utility Files

#### `src/lib/types.ts`
- TypeScript interfaces
- Database types
- Form types
- API response types
- Component props

#### `src/lib/slack.ts`
- Slack webhook integration
- Rich message formatting
- Block Kit messages
- Error handling
- Non-blocking sends

#### `src/lib/supabase/client.ts`
- Browser Supabase client
- Used in client components
- Auth state management

#### `src/lib/supabase/server.ts`
- Server Supabase client
- Used in Server Components
- Cookie management
- SSR support

#### `src/lib/supabase/middleware.ts`
- Auth session refresh
- Cookie updates
- Route protection logic

#### `middleware.ts`
- Next.js middleware
- Protects routes
- Redirects unauthenticated users
- Updates session

## 🎨 Design Files

The original design is preserved in:
- `/Users/sofianyoussef/Desktop/mercor-exact.html`

Components match this design:
- Navigation matches header
- HeroSection matches main section
- LatestRoles matches roles grid
- BenchmarkSection matches benchmark display

## 📊 Database Files

### Schema Definition
Located in `SUPABASE_SETUP.md`:
- Table definitions
- Indexes
- Triggers
- RLS policies
- Storage policies

### Sample Data
Located in `insert_roles.sql`:
- 6 medical roles
- Detailed descriptions
- Comprehensive requirements
- Matching original design

## 🔧 Configuration Files

### `.env.local`
Your current configuration (already filled in):
```env
NEXT_PUBLIC_SUPABASE_URL=https://imcchkdytaijgcceqszx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
SLACK_WEBHOOK_URL=your_slack_webhook_url  # Add this!
```

### `next.config.mjs`
- React Compiler enabled
- Supabase image domains configured

### `tailwind.config.ts`
- Custom CSS variables
- Background/foreground colors
- Content paths

### `tsconfig.json`
- Path aliases (@/*)
- Strict type checking
- Module resolution

## 📦 Dependencies

### Core
- Next.js 14.2.5
- React 18
- TypeScript

### Supabase
- @supabase/supabase-js
- @supabase/ssr

### Forms & Validation
- react-hook-form
- zod
- @hookform/resolvers

### Styling
- Tailwind CSS
- PostCSS

## 🚀 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## 📖 Reading Order

For new developers:
1. Start with `README.md` - project overview
2. Read `QUICK_START.md` - get it running
3. Review `IMPLEMENTATION_SUMMARY.md` - understand what was built
4. Check `SUPABASE_SETUP.md` - database structure
5. Optional: `SLACK_SETUP.md`, `DEPLOYMENT_CHECKLIST.md`

For deployment:
1. `SUPABASE_SETUP.md` - set up database
2. `SLACK_SETUP.md` - configure notifications
3. `DEPLOYMENT_CHECKLIST.md` - deploy to production

## 🔍 Finding Things

**Need to modify...**
- **Auth flow**: Check `src/components/AuthProvider.tsx` and `src/app/auth/`
- **Role display**: Check `src/components/LatestRoles.tsx` and `src/components/RoleCard.tsx`
- **Application form**: Check `src/components/ApplicationForm.tsx`
- **Database queries**: Check files in `src/app/api/`
- **Styling**: Check individual component files (Tailwind classes inline)
- **Types**: Check `src/lib/types.ts`
- **Slack messages**: Check `src/lib/slack.ts`

**Encountering errors...**
- **Database errors**: Check `SUPABASE_SETUP.md` - verify all SQL ran
- **Auth errors**: Check middleware.ts and auth components
- **Upload errors**: Check Supabase Storage bucket and policies
- **Build errors**: Check TypeScript errors in terminal

## 🎯 Quick Reference

| What | Where |
|------|-------|
| Add new role | Run INSERT in Supabase SQL Editor |
| Modify homepage | `src/app/page.tsx` |
| Change navigation | `src/components/Navigation.tsx` |
| Update auth flow | `src/components/AuthProvider.tsx` |
| Modify Slack message | `src/lib/slack.ts` |
| Add new page | Create in `src/app/[name]/page.tsx` |
| Add new component | Create in `src/components/` |
| Add new API route | Create in `src/app/api/[name]/route.ts` |
| Modify types | Edit `src/lib/types.ts` |
| Change env vars | Edit `.env.local` |

---

**Total Files**: 60+ files
**Total Lines of Code**: 2000+ lines
**Documentation**: 50+ pages
