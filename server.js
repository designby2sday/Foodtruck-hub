// server.js (root, next to package.json)
require('dotenv').config();                       // ✅ load .env first
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ---------- core middleware ----------
app.use(express.json());                          // ✅ parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // ✅ parse form bodies

// ---------- static site ----------
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/truck/client/index.html'));
});

// ---------- API routes ----------
const emailRoutes = require('./routes/email');    // << make sure this file exists
app.use('/api/email', emailRoutes);               // POST /api/email/contact

// (optional) health check
app.get('/health', (_, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
