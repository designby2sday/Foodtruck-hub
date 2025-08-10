const express = require('express');
const router = express.Router();
const { sendEmail } = require('../email/sendEmail');
const validateEmail = require('../middleware/validateEmail');
const emailLimiter = require('../middleware/rateLimit'); // optional

router.post('/contact', emailLimiter, validateEmail, async (req, res) => {
  const { name, email, message } = req.body;

  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  try {
    await sendEmail({
      to: 'yourdestination@email.com',
      subject: 'Food Truck Hub — Contact Form',
      html,
      replyTo: email
    });
    res.json({ success: true, message: 'Email sent.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, message: 'Email failed.' });
  }
});

module.exports = router;
