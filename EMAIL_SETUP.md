# Email Setup Guide for AKTOMRADY Website

## Current Status
✅ Email functionality is now implemented!
✅ Forms will send emails to `info@aktomrady.com` with CC to `admin@aktomrady.com`
✅ Development mode uses test email accounts (Ethereal Email) for testing

## For Production Email Setup

### Step 1: Choose Your Email Provider
You can use any SMTP email provider:
- Gmail (recommended for ease of setup)
- Outlook/Hotmail
- Yahoo Mail
- Your domain's email hosting

### Step 2: Get SMTP Credentials

#### For Gmail:
1. Enable 2-Factor Authentication on your Google Account
2. Go to Google Account Settings → Security
3. Generate an "App Password" for "Mail"
4. Use your Gmail address and the generated app password

#### For Other Providers:
Check your email provider's SMTP settings documentation.

### Step 3: Set Environment Variables
Create a `.env` file in your project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NODE_ENV=production
```

### Step 4: Test the Setup
1. Submit a form on your website
2. Check that emails arrive at info@aktomrady.com
3. Check server logs for any errors

## Development Testing

In development mode:
- Uses Ethereal Email test accounts
- Emails are not actually sent
- Preview URLs are logged to console
- You can view test emails at the preview URL

## Email Features

✅ **Professional HTML Templates**: Beautiful branded email formatting
✅ **Automatic Routing**: All forms go to info@aktomrady.com with CC to admin@aktomrady.com
✅ **Reply-To Header**: Recipients can reply directly to the form submitter
✅ **Contact Info**: All form data is included in structured format
✅ **Timestamps**: Each email includes submission timestamp
✅ **Form Type Detection**: Automatically handles both contact and quote forms
✅ **Error Handling**: Graceful failure handling with user feedback

## Form Types Supported

1. **Contact Form** (Contact page)
   - Name, Email, Phone, Subject, Message
   
2. **Quote Request Form** (Contact page & Quote page)
   - All contact info plus project details
   - Services, quantity, timeline, budget
   - Project specifications

## Troubleshooting

1. **Emails not sending**: Check SMTP credentials and network connectivity
2. **Gmail issues**: Ensure 2FA is enabled and you're using an App Password
3. **Development mode**: Check console for preview URLs to test email content
4. **Server errors**: Check server logs for detailed error messages

All form submissions are logged to the server console for debugging purposes.
