const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');


const paymentSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Address', paymentSchema);