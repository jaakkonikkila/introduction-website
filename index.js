const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Set up a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});