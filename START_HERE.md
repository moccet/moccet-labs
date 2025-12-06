# 🚀 START HERE - Moccet Labs Setup Guide

**Welcome to Moccet Labs!** This is your complete medical AI expert recruitment platform.

## ⚡ Quick Start (Choose Your Path)

### Path 1: Just Want to See It Running? (20 minutes)
1. Read **`QUICK_START.md`** ← Start here for fastest setup
2. Follow step-by-step to get running locally

### Path 2: Want Full Understanding? (45 minutes)
1. Read **`README.md`** ← Complete project overview
2. Read **`IMPLEMENTATION_SUMMARY.md`** ← What was built
3. Follow **`QUICK_START.md`** ← Set it up
4. Reference **`COMMON_COMMANDS.md`** ← Helpful commands

### Path 3: Ready to Deploy? (1-2 hours)
1. Follow **`QUICK_START.md`** to test locally
2. Read **`SUPABASE_SETUP.md`** for database details
3. Read **`SLACK_SETUP.md`** for notifications
4. Follow **`DEPLOYMENT_CHECKLIST.md`** to go live

## 📚 Documentation Guide

### Essential Reading
- **`QUICK_START.md`** - Get up and running in 20 minutes
- **`README.md`** - Complete project documentation
- **`SUPABASE_SETUP.md`** - Database setup with SQL scripts

### Setup Guides
- **`SLACK_SETUP.md`** - Configure Slack notifications
- **`DEPLOYMENT_CHECKLIST.md`** - Production deployment steps

### Reference
- **`COMMON_COMMANDS.md`** - Frequently used commands
- **`PROJECT_FILES.md`** - Overview of all files
- **`IMPLEMENTATION_SUMMARY.md`** - Technical details

### SQL Scripts
- **`insert_roles.sql`** - Add the 6 medical roles to database

## ✅ Current Status

Your project is **100% complete and ready to run!**

### What's Already Done
✅ Full authentication system (login/signup)
✅ User profiles with professional details
✅ Dynamic role listings from database
✅ Complete application flow with file uploads
✅ Slack notifications for new applications
✅ User dashboard to track applications
✅ Admin dashboard for managing applications
✅ Mobile responsive design
✅ Type-safe TypeScript codebase
✅ Secure with RLS and proper access controls

### What You Need to Do
1. ✏️ Add your Slack webhook URL to `.env.local`
2. 🗄️ Set up Supabase database (run SQL scripts)
3. ▶️ Run `npm install && npm run dev`
4. 🎉 Start using it!

## 🎯 Your Environment Variables

Your `.env.local` is already configured with Supabase credentials!

**Already Set:**
```env
✅ NEXT_PUBLIC_SUPABASE_URL
✅ NEXT_PUBLIC_SUPABASE_ANON_KEY
✅ SUPABASE_SERVICE_ROLE_KEY
```

**You Need to Add:**
```env
❌ SLACK_WEBHOOK_URL=your_slack_webhook_url
```

Follow **`SLACK_SETUP.md`** to get your webhook URL.

## 🏃 Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git push origin main
```

## 📦 What's Included

### Features
- User authentication & profiles
- Role browsing & search
- Application submission with resume upload
- Slack notifications
- Application tracking dashboard
- Admin dashboard
- File storage
- Email verification

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Database, Auth, Storage)
- Slack Webhooks
- React Hook Form + Zod

### Pages Built
- Homepage with role listings
- Browse all roles
- Individual role details
- Login & signup
- User profile
- Application dashboard
- Admin dashboard

## 🎨 Design

The UI matches the original design from:
`/Users/sofianyoussef/Desktop/mercor-exact.html`

All 6 roles from the design are ready to be added via:
`insert_roles.sql`

## 🔐 Security

✅ Row Level Security enabled
✅ Protected routes with middleware
✅ Secure file uploads
✅ Input validation
✅ Environment variables gitignored
✅ Auth tokens managed securely

## 📊 Database Schema

### Tables Created
1. **roles** - Job positions with rates, requirements, specialty
2. **user_profiles** - Extended user information
3. **applications** - Applications linking users to roles

### Storage
- **resumes** bucket - Private storage for uploaded resumes

## 🚨 Common Issues & Fixes

### Issue: Can't see roles on homepage
**Fix:** Run the SQL from `insert_roles.sql` in Supabase SQL Editor

### Issue: Can't sign up
**Fix:** Make sure you ran all SQL from `SUPABASE_SETUP.md`

### Issue: Resume upload fails
**Fix:** Create the `resumes` bucket in Supabase Storage

### Issue: No Slack notifications
**Fix:** Add SLACK_WEBHOOK_URL to `.env.local` and restart server

## 🎓 Learning Resources

### New to Next.js?
- [Next.js Tutorial](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)

### New to Supabase?
- [Supabase Quickstart](https://supabase.com/docs/guides/getting-started)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)

### New to Tailwind?
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/components)

## 🎯 Next Steps

### Right Now (5 minutes)
1. Open **`QUICK_START.md`**
2. Follow the 5-step setup
3. See it running!

### Today (30 minutes)
1. Set up Supabase database
2. Configure Slack webhook
3. Test the complete flow
4. Invite a test user

### This Week
1. Customize for your needs
2. Add more roles
3. Deploy to Vercel
4. Share with your team

## 💡 Pro Tips

1. **Bookmark** `COMMON_COMMANDS.md` for quick reference
2. **Use** Supabase Table Editor to view data easily
3. **Test** everything locally before deploying
4. **Keep** .env.local secure (never commit it)
5. **Read** error messages in the terminal

## 📞 Get Help

### Documentation
- Check relevant .md file for your task
- Use `PROJECT_FILES.md` to find what you need
- Read error messages carefully

### Stuck?
1. Check `COMMON_COMMANDS.md` for solutions
2. Review Supabase logs in dashboard
3. Check browser console for errors
4. Verify environment variables

### Community
- Supabase Discord: https://discord.supabase.com
- Next.js Discord: https://nextjs.org/discord

## 🎉 Success Criteria

You'll know it's working when:
- ✅ Homepage shows 6 roles
- ✅ Can sign up and log in
- ✅ Can apply to roles
- ✅ Slack gets notifications
- ✅ Dashboard shows applications
- ✅ No errors in console

## 📝 Checklist

Before you start coding:
- [ ] Read this document
- [ ] Choose your path (Quick Start, Full Understanding, or Deploy)
- [ ] Have Supabase account ready
- [ ] Have Slack workspace access
- [ ] `npm install` completed
- [ ] `.env.local` configured

You're ready! Open **`QUICK_START.md`** and begin! 🚀

---

**Questions?** All answers are in the documentation files.
**Stuck?** Check `COMMON_COMMANDS.md` for solutions.
**Ready?** Follow `QUICK_START.md` now!
