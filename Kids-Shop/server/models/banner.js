const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const Schema = mongoose.Schema;

const bannerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('Banner', bannerSchema);