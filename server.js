const express = require('express');
const path = require('path');
const app = express();

// ✅ Tell Express to serve files in the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Start the server
app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
