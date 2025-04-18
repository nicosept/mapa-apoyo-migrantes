const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;

// Serve static files from the "public" folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
