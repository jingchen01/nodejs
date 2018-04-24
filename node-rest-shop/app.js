const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const mongoose = require('mongoose');

// Connect to MongoDB 
// mongoose.connect('mongodb+srv://mongo-user_001:' + process.env.MONGO_ATLAS_PWD + '@cluster0-tajfi.mongodb.net/test',
//     {
//         useMongoClient: true
//     }
// );
mongoose.connect('mongodb+srv://mongo-user_001:' + process.env.MONGO_ATLAS_PWD + '@cluster0-tajfi.mongodb.net/test');


// health check 
app.use('/health', (req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS error handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({

        });
    }
    next();
})

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;