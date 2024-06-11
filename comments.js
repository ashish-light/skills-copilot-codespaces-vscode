// create web server
const express = require('express');
const app = express();
const port = 3000;


// create a route
app.get('/comments', (req, res) => {
    res.send('`<h1>Comments</h1>`');
});

// start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

