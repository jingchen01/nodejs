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

const getById = (req, res) => {
    ComedyMovie
        .findOne({ _id: req.params.movieId })
        .select('_id title rating price isReleased genre')
        .exec()
        .then(result => {
            res.status(200).json({
                movie: result
            });
        })
        .catch(err => {
            res.status(404).json({
                message: 'No movie founded with this id.'
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
    getAll: getAll,
    getById: getById
};