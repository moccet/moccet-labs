# Common Commands & Operations

Quick reference for frequently used commands and operations.

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
Opens at http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run build && npm start
```

### Type Check
```bash
npx tsc --noEmit
```

### Lint Code
```bash
npm run lint
```

## 📦 Dependencies

### Install All Dependencies
```bash
npm install
```

### Add New Package
```bash
npm install package-name
npm install -D package-name  # Dev dependency
```

### Update Dependencies
```bash
npm update
```

### Check Outdated
```bash
npm outdated
```

## 🗄️ Database Operations

### View Data in Supabase
1. Go to Supabase Dashboard
2. Click "Table Editor"
3. Select table (roles, user_profiles, applications)

### Add New Role
```sql
INSERT INTO roles (title, rate_min, rate_max, description, requirements, specialty, status)
VALUES (
  'New Role Title',
  150,
  300,
  'Role description...',
  ARRAY['Requirement 1', 'Requirement 2'],
  'Specialty Name',
  'active'
);
```

### View All Applications
```sql
SELECT
  a.*,
  r.title as role_title,
  u.full_name
FROM applications a
JOIN roles r ON a.role_id = r.id
JOIN user_profiles u ON a.user_id = u.user_id
ORDER BY a.applied_at DESC;
```

### Update Application Status
```sql
UPDATE applications
SET status = 'reviewing'  -- or 'accepted', 'rejected'
WHERE id = 'application-id-here';
```

### View User by Email
```sql
SELECT * FROM user_profiles
WHERE email = 'user@example.com';
```

### Delete Test Data
```sql
-- Delete test applications
DELETE FROM applications WHERE user_id IN (
  SELECT user_id FROM user_profiles
  WHERE email LIKE '%test%'
);

-- Delete test users
DELETE FROM user_profiles WHERE email LIKE '%test%';
```

## 💾 Storage Operations

### List Files in Bucket
In Supabase Dashboard:
1. Go to Storage
2. Click "resumes" bucket
3. Browse files

### Download Resume
```javascript
// In browser console or API
const { data, error } = await supabase.storage
  .from('resumes')
  .download('user-id/filename.pdf');
```

### Delete Old Resumes (SQL)
```sql
-- This requires admin access
SELECT * FROM storage.objects
WHERE bucket_id = 'resumes'
AND created_at < NOW() - INTERVAL '90 days';
```

## 🔐 User Management

### Create Admin User
```sql
-- First create account normally, then:
UPDATE user_profiles
SET email = 'admin@moccet-labs.com'
WHERE user_id = 'user-id-here';
```

### List All Users
```sql
SELECT
  id,
  email,
  created_at,
  last_sign_in_at
FROM auth.users
ORDER BY created_at DESC;
```

### Reset User Password (Supabase Dashboard)
1. Go to Authentication → Users
2. Find user
3. Click "..." → Reset password
4. User receives reset email

## 📊 Analytics Queries

### Application Statistics
```sql
SELECT
  status,
  COUNT(*) as count
FROM applications
GROUP BY status;
```

### Popular Roles
```sql
SELECT
  r.title,
  COUNT(a.id) as application_count
FROM roles r
LEFT JOIN applications a ON r.id = a.role_id
GROUP BY r.id, r.title
ORDER BY application_count DESC;
```

### Daily Applications
```sql
SELECT
  DATE(applied_at) as date,
  COUNT(*) as applications
FROM applications
GROUP BY DATE(applied_at)
ORDER BY date DESC
LIMIT 30;
```

### User Activity
```sql
SELECT
  u.email,
  u.full_name,
  COUNT(a.id) as total_applications,
  MAX(a.applied_at) as last_application
FROM user_profiles u
LEFT JOIN applications a ON u.user_id = a.user_id
GROUP BY u.user_id, u.email, u.full_name
ORDER BY total_applications DESC;
```

## 🔧 Troubleshooting

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### Clear Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check Environment Variables
```bash
cat .env.local
```

### Test Supabase Connection
```bash
# In browser console
console.log(await supabase.from('roles').select('count'))
```

### Check Logs
```bash
# Development server logs are in terminal
# Production logs in Vercel Dashboard → Deployments → Logs
```

## 🧪 Testing

### Test Application Flow
1. Sign up new user: `test+${Date.now()}@example.com`
2. Complete profile
3. Apply to a role
4. Check dashboard
5. Verify Slack notification
6. Clean up test data

### Test File Upload
```bash
# Create test PDF
echo "Test Resume" > test-resume.txt
# Upload via UI
```

### Test Admin Access
1. Create account with `admin@moccet-labs.com`
2. Visit `/admin/applications`
3. Should see all applications

## 📤 Deployment

### Deploy to Vercel
```bash
# Push to GitHub
git add .
git commit -m "Your message"
git push

# Or use Vercel CLI
npm i -g vercel
vercel
```

### Check Build Locally
```bash
npm run build
npm start
```

### Update Production Environment Variables
1. Go to Vercel Dashboard
2. Select project
3. Settings → Environment Variables
4. Update values
5. Redeploy

## 🔄 Git Operations

### Initial Commit
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Create Feature Branch
```bash
git checkout -b feature-name
# Make changes
git add .
git commit -m "Add feature"
git push origin feature-name
```

### Update from Main
```bash
git checkout main
git pull origin main
```

## 🎨 Styling

### Update Tailwind
After changing `tailwind.config.ts`:
```bash
# Restart dev server
# No build needed for development
```

### Add Custom Colors
```typescript
// In tailwind.config.ts
theme: {
  extend: {
    colors: {
      'brand': '#your-color',
    }
  }
}
```

## 📝 Code Snippets

### Add New API Route
```typescript
// src/app/api/your-route/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  // Your logic
  return NextResponse.json({ data });
}
```

### Add New Page
```typescript
// src/app/your-page/page.tsx
export default function YourPage() {
  return (
    <div>Your content</div>
  );
}
```

### Query Supabase
```typescript
const { data, error } = await supabase
  .from('table_name')
  .select('*')
  .eq('column', 'value');
```

## 🚨 Emergency Commands

### Rollback Deployment (Vercel)
1. Go to Vercel Dashboard
2. Deployments
3. Find previous working deployment
4. Click "..." → Promote to Production

### Disable Signups Temporarily
```sql
-- In Supabase SQL Editor
-- This requires custom auth hook setup
```

### Clear All Test Data
```sql
BEGIN;
DELETE FROM applications WHERE user_id IN (
  SELECT user_id FROM user_profiles WHERE email LIKE '%test%'
);
DELETE FROM user_profiles WHERE email LIKE '%test%';
COMMIT;
```

### Reset Database
```sql
-- CAUTION: This deletes everything!
TRUNCATE applications CASCADE;
TRUNCATE user_profiles CASCADE;
-- Don't truncate auth.users - manage via dashboard
```

## 📞 Support Contacts

### Resources
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Slack API: https://api.slack.com

### Community
- GitHub Issues: Create issue in your repo
- Supabase Discord: https://discord.supabase.com
- Next.js Discord: https://nextjs.org/discord

---

**Pro Tip**: Bookmark this page for quick reference! 🔖
