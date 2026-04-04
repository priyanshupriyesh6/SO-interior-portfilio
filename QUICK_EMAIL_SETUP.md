# ⚡ QUICK SETUP - Replace These 3 Values in Contact.jsx

## Step 1: Get Your Credentials from EmailJS Dashboard
1. Public Key: https://dashboard.emailjs.com/admin → Copy under Account
2. Service ID: Email Services → Create/View Service
3. Template ID: Email Templates → Create/View Template

## Step 2: Open `src/pages/Contact.jsx` and replace:

### Line 5 - PUBLIC KEY
Find:
```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

Replace with your actual public key:
```javascript
emailjs.init('5a1b2c3d4e5f6g7h8i9j0k');
```

### Line 44 - SERVICE ID
Find:
```javascript
'SERVICE_ID_HERE',
```

Replace with your actual service ID:
```javascript
'service_abc123xyz456',
```

### Line 45 - TEMPLATE ID
Find:
```javascript
'TEMPLATE_ID_HERE',
```

Replace with your actual template ID:
```javascript
'template_xyz789abc456',
```

## That's it! Your contact form is ready to send emails.

## Test it:
1. Go to http://localhost:5173/contact (or your dev server)
2. Fill the form and click "Send Message"
3. ✅ Should receive confirmation and email should arrive

---

*For detailed setup instructions, see EMAIL_SETUP_GUIDE.md*
