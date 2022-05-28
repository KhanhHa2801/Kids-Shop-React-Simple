const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const userFAQsSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    faqs: {
        type: Schema.Types.ObjectId,
        ref: 'FAQs',
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('UserFAQs', userFAQsSchema);