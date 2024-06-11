// create web server
// 1. create a web server
// 2. create a route to get all comments
// 3. create a route to get a comment by id
// 4. create a route to create a comment
// 5. create a route to update a comment
// 6. create a route to delete a comment

// 1. create a web server
const express = require('express');
const app = express();
app.use(express.json());

// 2. create a route to get all comments
app.get('/comments', (req, res) => {
    res.send('get all comments');
});

// 3. create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('get comment by id');
});

// 4. create a route to create a comment
app.post('/comments', (req, res) => {
    res.send('create a comment');
});

// 5. create a route to update a comment
app.put('/comments/:id', (req, res) => {
    res.send('update a comment');
});

// 6. create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('delete a comment');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});