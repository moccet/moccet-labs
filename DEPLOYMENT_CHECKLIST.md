# Deployment Checklist

Complete checklist for deploying moccet Labs to production.

## Pre-Deployment

### Code Review
- [ ] All features tested locally
- [ ] No console errors in browser
- [ ] All TypeScript errors resolved
- [ ] Environment variables documented
- [ ] .gitignore includes .env.local

### Database Setup
- [ ] Supabase project created for production
- [ ] All tables created (roles, user_profiles, applications)
- [ ] Indexes created
- [ ] Triggers configured
- [ ] RLS policies enabled
- [ ] Sample roles inserted
- [ ] Storage bucket created
- [ ] Storage policies configured

### Environment Variables
- [ ] Production Supabase URL obtained
- [ ] Production Supabase keys obtained
- [ ] Slack webhook configured for production
- [ ] All secrets are different from development

## Deploy to Vercel

### Initial Setup
1. Push code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Import to Vercel
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Select the repository

### Configure Project
- [ ] Framework Preset: Next.js
- [ ] Root Directory: `./`
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `.next`
- [ ] Install Command: `npm install`

### Environment Variables
Add all variables from `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SLACK_WEBHOOK_URL=
```

- [ ] All environment variables added
- [ ] Using production Supabase credentials
- [ ] Using production Slack webhook

### Deploy
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Note your deployment URL

## Post-Deployment

### Supabase Configuration
1. Add Vercel URL to Supabase allowed URLs
- [ ] Go to Supabase Dashboard → Authentication → URL Configuration
- [ ] Add your Vercel URL to "Site URL"
- [ ] Add to "Redirect URLs": `https://your-app.vercel.app/**`

### Test Production

#### Test 1: Homepage
- [ ] Visit production URL
- [ ] Homepage loads correctly
- [ ] 6 roles are displayed
- [ ] Navigation works
- [ ] Images load properly

#### Test 2: Authentication
- [ ] Click "Sign up"
- [ ] Create test account
- [ ] Verify email redirect works
- [ ] Profile auto-created
- [ ] Can log out
- [ ] Can log back in

#### Test 3: Roles
- [ ] Browse all roles page
- [ ] Click individual role
- [ ] Role details display correctly
- [ ] Apply button visible

#### Test 4: Application Flow
- [ ] Apply to a role
- [ ] Upload test resume
- [ ] Submit application
- [ ] Redirected to dashboard
- [ ] Application shows in dashboard
- [ ] Resume accessible in Supabase

#### Test 5: Slack Notification
- [ ] Check Slack channel
- [ ] Notification received
- [ ] All fields populated correctly
- [ ] Resume link works

#### Test 6: Admin Features
- [ ] Create admin account (@moccet-labs.com)
- [ ] Access /admin/applications
- [ ] See all applications
- [ ] Statistics display correctly

### Performance Check
- [ ] Run Lighthouse audit
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### Security Check
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Environment variables not exposed
- [ ] RLS policies working
- [ ] File upload security tested
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities

## Domain Setup (Optional)

### Custom Domain
- [ ] Purchase domain
- [ ] Add to Vercel project
- [ ] Configure DNS records
- [ ] Wait for DNS propagation
- [ ] SSL certificate auto-configured
- [ ] Update Supabase allowed URLs

### Update Environment
- [ ] Update NEXT_PUBLIC_SUPABASE_URL if needed
- [ ] Redeploy if needed

## Monitoring Setup

### Vercel Analytics
- [ ] Enable Vercel Analytics
- [ ] Set up alerts for errors
- [ ] Monitor deployment frequency

### Supabase Monitoring
- [ ] Check database usage
- [ ] Monitor storage usage
- [ ] Set up usage alerts
- [ ] Review query performance

### Error Tracking (Optional)
- [ ] Set up Sentry or similar
- [ ] Configure error alerts
- [ ] Test error reporting

## Documentation

### For Team
- [ ] Share production URL
- [ ] Document admin access
- [ ] Share Slack channel
- [ ] Provide login instructions

### For Users
- [ ] Create user guide (optional)
- [ ] Prepare onboarding emails
- [ ] Set up support email

## Ongoing Maintenance

### Weekly
- [ ] Check Slack notifications working
- [ ] Review new applications
- [ ] Monitor error logs
- [ ] Check database performance

### Monthly
- [ ] Review Supabase usage
- [ ] Check Vercel analytics
- [ ] Update dependencies
- [ ] Review security alerts

### As Needed
- [ ] Add new roles
- [ ] Update role descriptions
- [ ] Manage application status
- [ ] Handle user support requests

## Rollback Plan

### If Issues Occur
1. Check Vercel deployment logs
2. Review browser console errors
3. Check Supabase logs
4. If critical: Rollback to previous deployment
   ```bash
   # In Vercel dashboard
   Deployments → Previous Deployment → Promote to Production
   ```

### Common Issues

**Issue: Build fails**
- Check TypeScript errors
- Verify all dependencies installed
- Check environment variables

**Issue: Database errors**
- Verify RLS policies
- Check Supabase connection
- Review schema matches code

**Issue: Auth not working**
- Check allowed URLs in Supabase
- Verify environment variables
- Check cookie settings

## Production Checklist Summary

### Before Launch
- [ ] All tests pass
- [ ] Database configured
- [ ] Environment variables set
- [ ] Deployed to Vercel
- [ ] Supabase configured
- [ ] Slack tested

### Launch Day
- [ ] Final smoke test
- [ ] Monitor error logs
- [ ] Test critical paths
- [ ] Notify team
- [ ] Monitor Slack

### Post-Launch
- [ ] Monitor for 24 hours
- [ ] Check analytics
- [ ] Gather feedback
- [ ] Plan improvements

## Success Criteria

Your deployment is successful when:
- ✅ All pages load without errors
- ✅ Users can sign up and log in
- ✅ Applications can be submitted
- ✅ Resumes upload successfully
- ✅ Slack notifications work
- ✅ Dashboard shows applications
- ✅ Admin panel accessible
- ✅ No security vulnerabilities
- ✅ Performance is good (< 3s load time)
- ✅ Mobile responsive

---

**Deployment Time**: ~30-45 minutes
**You're production ready!** 🎉

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review Supabase logs
3. Test locally with production env vars
4. Check GitHub issues
5. Contact support@moccet-labs.com
