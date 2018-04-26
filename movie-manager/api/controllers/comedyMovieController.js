const ComedyMovie = require('./../models/comedyMovieModel');

const getAll = (req, res) => {
    ComedyMovie
        .find()
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Comedy movies',
                movies: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error.'
            });
        });
}

const add = (req, res) => {
    const movie = new ComedyMovie(req.body);
    movie
        .save()
        .then(result => {
            res.status(201).json({
                movie: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error.'
            });
        });
}

module.exports = {
    add: add,
    getAll: getAll
};