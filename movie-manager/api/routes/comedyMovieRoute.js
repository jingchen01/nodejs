const router = require('express').Router();
const comedyMovieController = require('./../controllers/comedyMovieController');

router.route('/').get(comedyMovieController.getAll);

router.route('/').post(comedyMovieController.add);

module.exports = router;




