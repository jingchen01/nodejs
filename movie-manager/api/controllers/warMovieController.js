const getAll = (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.status(200).json({
        message: 'War movie.'
    });
};

module.exports = getAll;
