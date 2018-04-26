require('dotenv').config();
require('morgan');
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log('server is running on port ' + port);
});

// greeting
const welcome = (req, res) => {
    console.log(req.url);
    console.log('Welcome to movie manager.');
    res.send('Welcome to movie manager.');
    res.end();
}

app.get('/', welcome);

app.get('/books', (req, res) => {
    res.send('Books');
});

app.get('/authors', (req, res) => {
    res.send('Authors');
});