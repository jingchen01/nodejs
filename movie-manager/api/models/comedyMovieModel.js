const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comedyMovieModel = new Schema({
   // _id: Schema.Types.ObjectId,
    title: String,
    rating: Number,
    price: Number,
    genre: {
        type: String,
        default: "Comedy"
    },
    isReleased: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('ComedyMovie', comedyMovieModel);