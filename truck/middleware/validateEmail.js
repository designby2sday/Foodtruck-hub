// truck/middleware/validateEmail.js
module.exports = (req, res, next) => {
  const { name, email, message } = req.body || {};
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '');

  if (!name || !isEmail(email) || !message) {
    return res.status(400).json({ success: false, message: 'Invalid input.' });
  }
  next();
};
