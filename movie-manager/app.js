require('dotenv').config();
require('morgan');
const http = require('http');

const welcome = (req, res) => {
    console.log(req.url);
    console.log('Welcome to movie manager.');
    res.write('Welcome to movie manager.');
    res.end();
}

const server = http.createServer(welcome);

const port = process.env.APP_PORT || 3000;

server.listen(port, () => {
    console.log('server is running on port ' + port);
});

