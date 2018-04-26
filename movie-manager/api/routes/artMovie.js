const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.send('Art movies.');
})


module.exports = router;