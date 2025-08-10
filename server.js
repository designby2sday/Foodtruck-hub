require('dotenv').config();
const express = require('express');
const path = require('path');
const { createTransport } = require('nodemailer'); // <-- add this
const app = express();
const PORT = process.env.PORT || 3000;

// 🔍 One-time SMTP verification on boot
(async () => {
  try {
    const t = createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: { user: process.env.BREVO_USER, pass: process.env.BREVO_PASS },
    });
    await t.verify();
    console.log('✅ SMTP verify: connection + auth OK');
  } catch (err) {
    console.error('❌ SMTP verify failed:', err && (err.response || err.message || err));
  }
})();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, 'truck')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'truck/index.html'));
});

// routes
const emailRoutes = require('./truck/routes/email');
app.use('/api/email', emailRoutes);

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
