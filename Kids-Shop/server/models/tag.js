const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const tagSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('Tag', tagSchema);