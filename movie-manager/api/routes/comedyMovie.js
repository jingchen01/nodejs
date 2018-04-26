const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.status(200).json({
        message: 'Comedy movie.'
    });
});


module.exports = router;




