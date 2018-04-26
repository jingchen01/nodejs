const getAll = (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.send('Art movies.');
}

module.exports = getAll;