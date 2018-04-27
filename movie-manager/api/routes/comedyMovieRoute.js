const router = require('express').Router();
const comedyMovieController = require('./../controllers/comedyMovieController');

// find all movies
router.route('/').get(comedyMovieController.getAll);

// find single movie by id
router.route('/:movieId').get(comedyMovieController.getById);

// add one movie
router.route('/').post(comedyMovieController.add);

router.route('/:id')
    .put(comedyMovieController.put)
    .patch(comedyMovieController.patch);

module.exports = router;




