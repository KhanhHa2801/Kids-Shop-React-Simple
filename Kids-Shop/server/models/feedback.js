const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const feedbackSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    scores: {
        type: Number,
        required: true,
    }
}, schemaOptions);

module.exports = mongoose.model('Feedback', feedbackSchema);