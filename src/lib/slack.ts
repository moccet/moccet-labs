import { SlackNotificationPayload } from './types';

export async function sendSlackNotification(payload: SlackNotificationPayload): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('Slack webhook URL not configured');
    return false;
  }

  try {
    const message = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🎯 New Application Received',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Applicant:*\n${payload.applicant_name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Role:*\n${payload.role_title}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${payload.applicant_email}`,
            },
            {
              type: 'mrkdwn',
              text: `*Rate:*\n${payload.role_rate}`,
            },
          ],
        },
        ...(payload.applicant_phone ? [
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Phone:*\n${payload.applicant_phone}`,
              },
            ],
          },
        ] : []),
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Resume:*\n<${payload.resume_url}|Download Resume>`,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Applied At:*\n${new Date(payload.applied_at).toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}`,
            },
            {
              type: 'mrkdwn',
              text: `*Application ID:*\n\`${payload.application_id}\``,
            },
          ],
        },
        ...(payload.metadata ? [
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: [
                  payload.metadata.user_agent && `UA: ${payload.metadata.user_agent.substring(0, 50)}...`,
                  payload.metadata.ip_address && `IP: ${payload.metadata.ip_address}`,
                  payload.metadata.referrer && `Ref: ${payload.metadata.referrer}`,
                ].filter(Boolean).join(' | '),
              },
            ],
          },
        ] : []),
        {
          type: 'divider',
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: '✅ Review Application',
                emoji: true,
              },
              style: 'primary',
              url: `${process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://app.supabase.com'}/project/_/editor`,
            },
          ],
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Failed to send Slack notification:', error);
    return false;
  }
}
