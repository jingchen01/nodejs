const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

//
mongoose.Promise = global.Promise;

router.get('/', (req, res, next) => {
    Product.find()
        .select('name price created_date _id')
        .exec()
        .then(result => {
            const response = {
                count: result.length,
                products: result.map(product => {
                    return {
                        _id: product._id,
                        price: product.price,
                        name: product.name,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + product._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    // save product to mongodb database
    product
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        });

    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .select('name price _id')
        .exec()
        .then(doc => {
            if (doc) {
                console.log('From database', doc);
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products'
                    }
                });
            } else {
                res.status(404).json({
                    message: 'No valid entry found for provided id!'
                });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updatedOps = {};
    for (const ops of req.body) {//?
        updatedOps[ops.propName] = ops.value;//?
    }
    Product.update({ _id: id }, { $set: updatedOps })
        .exec()
        .then(result => {
            // console.log(result);
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/products/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/products/',
                    body: { name: 'String', price: 'Number' }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


module.exports = router;