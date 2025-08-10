const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve all static files in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Point root "/" to the actual homepage inside truck/client
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/truck/client/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

