
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { schemaOptions } = require('./modelOptions');

const SchemaTypes = Schema.Types;

const orderSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    totalBill: {
        type: SchemaTypes.Decimal128,
        required: true
    },
    accept: {
        type: Boolean,
        required: true
    },
    messShip: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    product:{
        type: [SchemaTypes.ObjectId],
        ref: "Product"
    }
}, schemaOptions);

const decimal2JSON = (v, i, prev) => {
    if (v !== null && typeof v === 'object') {
      if (v.constructor.name === 'Decimal128')
        prev[i] = v.toString();
      else
        Object.entries(v).forEach(([key, value]) => decimal2JSON(value, key, prev ? prev[i] : v));
    }
  };
orderSchema.set('toJSON', {
    transform: (doc, ret) => {
      decimal2JSON(ret);
      return ret;
    }
  });

module.exports = mongoose.model('Order', orderSchema);