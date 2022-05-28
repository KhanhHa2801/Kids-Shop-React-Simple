const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
}, schemaOptions);

module.exports = mongoose.model('Admin', adminSchema);