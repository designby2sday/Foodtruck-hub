const express = require('express');
const router = express.Router();
const { sendEmail } = require('../email/sendEmail');

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '');

router.post('/contact', async (req, res) => {
  try {
    console.log('--- /api/email/contact HIT ---');
    console.log('REQ HEADERS:', req.headers);
    console.log('REQ BODY:', req.body);

    const { name = '', email = '', message = '' } = req.body || {};
    if (!name.trim() || !isEmail(email) || !message.trim()) {
      console.log('Validation failed');
      return res.status(400).json({ success: false, message: 'Invalid input.' });
    }

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g,'<br>')}</p>
    `;

    const info = await sendEmail({
      to: 'YOUR_REAL_INBOX@example.com', // <-- set this to your real inbox
      subject: 'Food Truck Hub — Contact Form',
      html,
      replyTo: email
    });

    console.log('SEND OK:', info?.messageId || info);
    return res.json({ success: true, message: 'Email sent.' });
  } catch (e) {
    console.error('SEND ERROR:', e && (e.response || e.message || e));
    return res.status(500).json({ success: false, message: 'Email failed.' });
  }
});

module.exports = router;
