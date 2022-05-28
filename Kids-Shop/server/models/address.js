const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');


const addressSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Address', addressSchema);