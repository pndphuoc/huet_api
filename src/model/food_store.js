const { default: mongoose } = require('mongoose');
const mongo = require('mongoose')
const Schema = mongo.Schema

const FoodStore = new Schema(
    {
        id: {type: String, require: true, unique: true},
        name: {type: String, require: true, },
        images: {type: Array, },
        categories: {type: Array, require: true},
        rating: {type: Number},
        ratingCount: {type: Number},
        isOpen: {type: Boolean, require: true},
        description: {type: String},
        menu: {type: Array},
        openTime: {type: String},
        closeTime: {type: String},
        minCost: {type: Number},
        maxCost: {type: Number}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('FoodStore', FoodStore)