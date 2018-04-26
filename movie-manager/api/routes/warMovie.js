const router = require('express').Router();
const warMovieController = require('./../controllers/warMovieController');

router.route('/').get(warMovieController);

module.exports = router;