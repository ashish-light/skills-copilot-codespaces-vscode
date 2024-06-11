// create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 3000;

// create file
const commentsPath = path.join(__dirname, 'comments.json');

// read file
const comments = JSON.parse(fs.readFileSync(commentsPath));

// create a route
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});