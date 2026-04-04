# Email Setup Guide for SO Interior Portfolio

This guide explains how to set up email functionality for the contact form.

## Prerequisites

- EmailJS account (free tier available)
- Gmail account

## Step-by-Step Setup

### 1. Create EmailJS Account

- Visit: https://www.emailjs.com/
- Sign up for a free account
- Confirm your email

### 2. Get Your Public Key

- Go to: https://dashboard.emailjs.com/admin
- Copy your **Public Key**
- This is displayed in the dashboard under the account section

### 3. Set Up Email Service

- In EmailJS Dashboard, go to **Email Services**
- Click **Add Service**
- Select **Gmail** as the provider
- Click **Connect Gmail**
- Follow the Gmail authorization process
- Save the service - note the **Service ID** (usually looks like "service_xxxxxxxxxx")

### 4. Create Email Template

- Go to **Email Templates** section
- Click **Create New Template**
- Set template name: `contact_form_template` (or any name you prefer)
- Configure the template with the following variables:

  ```
  From Name: {{from_name}}
  From Email: {{from_email}}
  To Email: {{to_email}}

  Subject: New Contact Form Submission from {{from_name}}

  Body:
  Name: {{from_name}}
  Email: {{from_email}}

  Message:
  {{message}}
  ```

- Save and note the **Template ID** (usually looks like "template_xxxxxxxxxx")

### 5. Update Contact.jsx

Open `src/pages/Contact.jsx` and replace these placeholders:

```javascript
// Line 5: Replace YOUR_PUBLIC_KEY_HERE
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 44: Replace SERVICE_ID_HERE
'SERVICE_ID_HERE',

// Line 45: Replace TEMPLATE_ID_HERE
'TEMPLATE_ID_HERE',
```

With your actual credentials from EmailJS dashboard.

### 6. Test the Form

- Navigate to the Contact page
- Fill in the form with test data
- Click "Send Message"
- Check:
  - Success message appears
  - Email arrives at sointeriorsofficials@gmail.com
  - No errors in browser console

## Example Configuration

Here's what your Contact.jsx should look like after setup:

```javascript
emailjs.init("YOUR_PUBLIC_KEY_abc123xyz");

await emailjs.send(
  "service_abc123xyz", // Your Service ID
  "template_abc123xyz", // Your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    to_email: "sointeriorsofficials@gmail.com",
    message: formData.message,
    reply_to: formData.email,
  },
);
```

## Features Implemented

✅ Form validation (all fields required)
✅ Email format validation
✅ Loading state during submission
✅ Success/Error messages
✅ Form reset after successful submission
✅ Auto-clear messages after 5 seconds
✅ Responsive form design

## Troubleshooting

### Email not sending?

1. Check console for error messages (F12 → Console)
2. Verify Service ID and Template ID are correct
3. Verify Gmail account is properly connected in EmailJS
4. Check EmailJS dashboard for failed emails

### Getting CORS errors?

- This shouldn't happen with EmailJS client-side
- Make sure you're using the PUBLIC key, not the private key

### Template not working?

- Check variable names match exactly (case-sensitive)
- Test template in EmailJS dashboard first

## Security Note

- The PUBLIC key is safe to expose in client-side code
- Never commit private keys to version control
- Public key is meant to be visible

## Additional Customization

You can modify:

- Recipient email (currently: sointeriorsofficials@gmail.com)
- Template variables in the request
- Success/error messages
- Form fields

For more info: https://www.emailjs.com/docs/
