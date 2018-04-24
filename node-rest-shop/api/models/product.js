const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        default: 'product'
    },
    price: {
        type: Number,
        required: 'Kindly enter price of product.'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);