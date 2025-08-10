// middleware/validateEmail.js
module.exports = (req, res, next) => {
  const { name, email, message } = req.body;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');

  if (!name || !isEmail || !message) {
    return res.status(400).json({ success: false, message: 'Invalid input.' });
  }
  next();
};
