# Slack Integration Setup Guide

Quick guide to set up Slack notifications for new applications.

## Overview

When a user submits an application, a rich Slack message will be sent to your chosen channel with:
- Applicant details (name, email, phone)
- Role information (title, rate range)
- Resume download link
- Application timestamp
- Metadata (IP address, user agent, referrer)

## Step-by-Step Setup

### 1. Create or Select Slack App

**Option A: Create New App**
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Create New App"**
3. Choose **"From scratch"**
4. Name it: `moccet Labs Applications`
5. Select your workspace
6. Click **"Create App"**

**Option B: Use Existing App**
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Select your existing app
3. Continue to step 2

### 2. Enable Incoming Webhooks

1. In your app settings, click **"Incoming Webhooks"** in the sidebar
2. Toggle **"Activate Incoming Webhooks"** to ON
3. Scroll down and click **"Add New Webhook to Workspace"**
4. Select the channel where notifications should be posted
   - Recommended: Create a dedicated channel like `#applications` or `#hiring`
5. Click **"Allow"**

### 3. Copy Webhook URL

1. You'll see your new webhook URL
2. It looks like: `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX`
3. Click **"Copy"** button

### 4. Add to Environment Variables

1. Open `.env.local` in your project root
2. Update the `SLACK_WEBHOOK_URL` line:

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/ACTUAL/WEBHOOK/URL
```

3. Save the file

### 5. Restart Dev Server

If your dev server is running:
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

## Test the Integration

### Quick Test

1. Sign up or log in to your application
2. Apply to any role with a test resume
3. Check your Slack channel

You should see a message like this:

```
🎯 New Application Received

Applicant: Dr. Jane Smith
Email: jane.smith@example.com

Role: Radiology Expert
Rate: $180-$280/hr

Resume: [Download Resume]

Applied At: Jan 15, 2025, 2:30 PM
Application ID: abc123-def456-ghi789

✅ Review Application [Button]
```

## Customization

### Change Channel

To post notifications to a different channel:
1. Go back to your app at [api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Incoming Webhooks"**
3. Remove old webhook (click trash icon)
4. Add new webhook to different channel
5. Update `.env.local` with new URL

### Customize Message Format

Edit `src/lib/slack.ts` to modify:
- Message text and formatting
- Which fields to include
- Button actions
- Colors and styling

Example customizations:
```typescript
// Add custom emoji
text: '🎯 New Application Received'

// Change button text
text: 'View in Dashboard'

// Add more fields
{
  type: 'mrkdwn',
  text: `*Cover Letter:*\n${payload.cover_letter?.substring(0, 100)}...`
}
```

## Troubleshooting

### Issue: No Slack notifications appearing

**Check 1: Webhook URL**
```bash
# Verify URL is set correctly
cat .env.local | grep SLACK_WEBHOOK_URL
```

**Check 2: Server restarted**
- Make sure you restarted dev server after changing .env.local

**Check 3: Webhook is active**
- Go to your Slack app settings
- Verify webhook shows as active

**Check 4: Application console**
- Check terminal for any Slack-related errors
- Look for "Failed to send Slack notification"

### Issue: Getting 404 errors

**Fix**: Your webhook URL is invalid or deleted
1. Create a new webhook in Slack
2. Update .env.local
3. Restart server

### Issue: Getting 401 errors

**Fix**: Your workspace may have changed
1. Recreate the webhook
2. Ensure app has proper permissions

### Issue: Messages look wrong

**Fix**: Update the message format in `src/lib/slack.ts`
- Slack uses Block Kit format
- Test at: [api.slack.com/block-kit](https://api.slack.com/block-kit)

## Advanced: Multiple Channels

To send different notifications to different channels:

1. Create multiple webhooks in your Slack app
2. Add them to .env.local:
```env
SLACK_WEBHOOK_URL_APPLICATIONS=https://hooks.slack.com/services/...
SLACK_WEBHOOK_URL_URGENT=https://hooks.slack.com/services/...
```

3. Modify `src/lib/slack.ts`:
```typescript
// Use different webhooks based on role
const webhookUrl = role.rate_max > 400
  ? process.env.SLACK_WEBHOOK_URL_URGENT
  : process.env.SLACK_WEBHOOK_URL_APPLICATIONS;
```

## Optional: Mention Users

To @mention team members in notifications:

1. Get user ID from Slack:
   - Right click user → View profile → More → Copy member ID
2. Add to message:
```typescript
{
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: `<@U12345678> New application needs review!`
  }
}
```

## Best Practices

1. **Use dedicated channel**: Create `#applications` or similar
2. **Test thoroughly**: Submit test applications before going live
3. **Monitor webhook**: Set up alerts for webhook failures
4. **Rate limiting**: Slack webhooks have limits (1 request per second)
5. **Error handling**: Application submission succeeds even if Slack fails

## Security Notes

- ✅ Webhook URL is secret - keep it in .env.local (gitignored)
- ✅ Never commit webhook URLs to git
- ✅ Rotate webhook if accidentally exposed
- ✅ Use different webhooks for dev/staging/production

## Resources

- [Slack Block Kit Builder](https://api.slack.com/block-kit)
- [Incoming Webhooks Documentation](https://api.slack.com/messaging/webhooks)
- [Message Formatting](https://api.slack.com/reference/surfaces/formatting)
- [Rate Limits](https://api.slack.com/docs/rate-limits)

---

**Setup Time**: ~5 minutes
**You're all set!** 🎉
