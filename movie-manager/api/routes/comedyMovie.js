const router = require('express').Router();
const comedyMovieController = require('./../controllers/comedyMovieController');

router.route('/').get(comedyMovieController);

module.exports = router;




