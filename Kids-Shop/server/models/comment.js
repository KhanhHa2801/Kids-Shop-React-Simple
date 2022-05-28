const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const commentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('Comment', commentSchema);