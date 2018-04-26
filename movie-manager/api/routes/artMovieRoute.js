const router = require('express').Router();
const artMovieController = require('./../controllers/artMovieController');

router.route('/').get(artMovieController);

module.exports = router;