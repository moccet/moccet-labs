# Quick Start Guide

Get your moccet Labs application up and running in minutes!

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Supabase account created
- [ ] Slack workspace access (optional but recommended)

## Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

## Step 2: Set Up Supabase (10 minutes)

### 2.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait for project to be ready

### 2.2 Run Database Setup

1. In Supabase Dashboard, go to **SQL Editor**
2. Open `SUPABASE_SETUP.md` in this project
3. Copy and paste each SQL section **in order**:
   - ✅ Create Tables
   - ✅ Create Indexes
   - ✅ Create Triggers
   - ✅ Insert Sample Data (the 6 roles)
   - ✅ Enable RLS
   - ✅ Create Policies
   - ✅ Create Profile Trigger

### 2.3 Set Up Storage

1. In Supabase Dashboard, go to **Storage**
2. Click "New Bucket"
3. Name it: `resumes`
4. Make it **Private** (not public)
5. Click "Create Bucket"
6. Go to **Policies** tab
7. Run the storage policies SQL from `SUPABASE_SETUP.md`

### 2.4 Get Your Credentials

1. Go to **Settings** → **API**
2. Copy these values:
   - Project URL
   - `anon` `public` key
   - `service_role` `secret` key (optional)

## Step 3: Configure Environment (2 minutes)

Your `.env.local` already has Supabase credentials! Just add your Slack webhook:

1. Go to your Slack workspace
2. Visit [api.slack.com/apps](https://api.slack.com/apps)
3. Create new app or select existing
4. Enable **Incoming Webhooks**
5. Add webhook to your channel
6. Copy the webhook URL

Update `.env.local`:
```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

## Step 4: Run the Application (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Test Everything (5 minutes)

### Test 1: View Roles
- Visit homepage
- You should see 6 medical roles
- Click "View all →" to see all roles page

### Test 2: Sign Up
1. Click "Sign up" in navigation
2. Create account with any email
3. Fill in your profile

### Test 3: Apply to a Role
1. Browse to a role detail page
2. Click "Apply"
3. Upload a test PDF resume
4. Write optional cover letter
5. Submit application

### Test 4: Check Dashboard
1. Click your name → "My Applications"
2. You should see your application with "pending" status

### Test 5: Slack Notification (if configured)
- Check your Slack channel
- You should see a rich notification with:
  - Your name and email
  - Role details
  - Resume link
  - Application metadata

### Test 6: Admin Dashboard (optional)
1. Create another account with email ending in `@moccet-labs.com`
2. Visit `/admin/applications`
3. See all applications from all users

## Common Issues & Fixes

### Issue: "Roles not showing"
**Fix**: Make sure you ran the INSERT INTO roles SQL in Supabase

### Issue: "Can't sign up"
**Fix**: Check that the profile trigger was created in Supabase

### Issue: "Resume upload fails"
**Fix**:
1. Verify `resumes` bucket exists in Supabase Storage
2. Check storage policies were applied

### Issue: "No Slack notification"
**Fix**:
1. Verify SLACK_WEBHOOK_URL in .env.local
2. Restart dev server after changing .env.local
3. Check Slack webhook is active

### Issue: "Database errors"
**Fix**: Run ALL SQL from SUPABASE_SETUP.md in order, especially RLS policies

## Verification Checklist

- [ ] Homepage loads and shows 6 roles
- [ ] Can sign up and create account
- [ ] Can update profile
- [ ] Can view all roles
- [ ] Can view individual role details
- [ ] Can apply to a role with resume
- [ ] Application appears in dashboard
- [ ] Slack notification received (if configured)
- [ ] Resume stored in Supabase Storage
- [ ] Navigation shows logged in state

## Next Steps

### For Development
- Customize role descriptions
- Add more roles via SQL
- Modify UI components
- Add custom features

### For Production
1. Deploy to Vercel
2. Update Supabase allowed URLs
3. Configure production Slack webhook
4. Test end-to-end flow
5. Monitor applications

## Need Help?

1. Check `README.md` for detailed documentation
2. Review `SUPABASE_SETUP.md` for database details
3. See `IMPLEMENTATION_SUMMARY.md` for technical overview
4. Open GitHub issue for bugs

## Pro Tips

1. **Use Chrome DevTools** to inspect network requests if something fails
2. **Check Supabase Logs** (Dashboard → Logs) for database errors
3. **Clear browser cache** if you see stale data
4. **Restart dev server** after .env changes
5. **Use Supabase Table Editor** to view data directly

---

**Total Setup Time**: ~20 minutes
**You're ready to go!** 🚀
