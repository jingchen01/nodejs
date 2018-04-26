require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.APP_PORT || 3000;

const db = mongoose.connect('mongodb://localhost/MoviesDb');


// routes
const artMovieRouter = require('./api/routes/artMovieRoute');
const warMovieRouter = require('./api/routes/warMovieRoute');
const comedyMovieRouter = require('./api/routes/comedyMovieRoute');

app.listen(port, () => {
    console.log('server is running on port ' + port);
});

// health check
const health = (req, res) => {
    res.status(200).json({
        message: 'Movie manager launched successfully.'
    });
    res.end();
}

app.get('/', health);

// dummy api
app.get('/books', (req, res) => {
    res.send('Books');
});
app.get('/authors', (req, res) => {
    res.send('Authors');
});

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/art-movie', artMovieRouter);
app.use('/war-movie', warMovieRouter);
app.use('/comedy-movie', comedyMovieRouter);