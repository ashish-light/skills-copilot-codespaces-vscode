// create web server
// get express module from node_modules
var express = require('express');
// create express object
var app = express();
// get body-parser module from node_modules
var bodyParser = require('body-parser');
// create body parser object
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// set view engine
app.set('view engine', 'ejs');
// set views directory
app.set('views', './views');
// listen to port 3000
app.listen(3000);
// create comments array
var comments = [];
// create route for /comments
app.get('/comments', function(req, res) {
    // render comments view
    res.render('comments', { comments: comments });
});
// create route for /addComment
app.post('/addComment', urlencodedParser, function(req, res) {
    // add comment to comments array
    comments.push(req.body);
    // redirect to /comments
    res.redirect('/comments');
});