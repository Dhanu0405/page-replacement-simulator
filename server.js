// server.js

const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const axios = require('axios');
const path = require('path');

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the project root
app.use(express.static(path.join(__dirname, '/')));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
