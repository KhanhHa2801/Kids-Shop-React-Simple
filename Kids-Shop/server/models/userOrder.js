const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const productConnectSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('UserOrder', productConnectSchema);