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
        // findOne:  When executed, the first found document is passed to the callback.
        // .findOne({ _id: req.params.movieId })
        // If you're querying by _id, use Model.findById()
        // movieId should be the same as query field name in route
        .findById({ _id: req.params.movieId })
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


const put = (req, res) => {
    ComedyMovie.findById(req.params.id)
        .exec()
        .then(movie => {
            movie.genre = req.body.genre;
            movie.isReleased = req.body.isReleased;
            movie.title = req.body.title;
            movie.rating = req.body.rating;
            movie.price = req.body.price;

            movie.save((err) => {
                if (!err) {
                    res.status(200).json({
                        movie: movie
                    });
                } else {
                    res.status(500).json({
                        message: 'Internal server error.'
                    });
                }
            });
        })
        .catch(err => {
            res.status(404).json({
                message: 'Not found.'
            });
        });
}


const patch = (req, res) => {
    ComedyMovie.findById(req.params.id)
        .exec()
        .then(movie => {
            const updateOptions = {};
            for (const field of req.body) {
                // bypass _id updating
                if (field.propName === "_id") {
                    continue;
                }
                updateOptions[field.propName] = field.value;
            }
            ComedyMovie.update({ _id: req.params.id }, { $set: updateOptions })
                .exec()
                .then(result => {
                    res.status(200).json({
                        message: 'Updated movie.'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error.'
                    });
                });
        })
        .catch(err => {
            res.status(404).json({
                message: 'Not found.'
            });
        })
}

module.exports = {
    add: add,
    put: put,
    patch: patch,
    getAll: getAll,
    getById: getById
};