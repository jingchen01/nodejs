const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');


router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(result => {
            if (result.length >= 0) {
                console.log(result);
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    message: 'No entries found.'
                });
            }
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
        .exec()
        .then(doc => {
            if (doc) {
                console.log('From database', doc);
                res.status(200).json(doc);
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
            console.log(result);
            res.status(200).json(result);
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
                result
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