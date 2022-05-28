const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const faqsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('FAQs', faqsSchema);