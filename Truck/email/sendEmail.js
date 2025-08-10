// email/sendEmail.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  }
});

async function sendEmail({ to, subject, html, replyTo }) {
  const info = await transporter.sendMail({
    from: `"Food Truck Hub" <${process.env.BREVO_USER}>`,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {})
  });
  return info;
}

module.exports = { sendEmail };
