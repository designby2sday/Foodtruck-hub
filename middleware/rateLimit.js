// middleware/rateLimit.js
const rateLimit = require('express-rate-limit');

const emailLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit to 5 requests per IP
  message: { success: false, message: 'Too many requests, try again later.' }
});

module.exports = emailLimiter;
