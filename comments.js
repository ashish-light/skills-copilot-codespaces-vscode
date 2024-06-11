// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// create a route
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});

// create a route
app.get('/comments/:commentId', (req, res) => {
    res.send('This is a comments page with id ' + req.params.commentId);
});

// start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});