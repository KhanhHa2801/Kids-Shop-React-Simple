const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const Schema = mongoose.Schema;
const ColorSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const SizeSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const FebSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });


const decimal2JSON = (v, i, prev) => {
    if (v !== null && typeof v === 'object') {
      if (v.constructor.name === 'Decimal128')
        prev[i] = v.toString();
      else
        Object.entries(v).forEach(([key, value]) => decimal2JSON(value, key, prev ? prev[i] : v));
    }
  };
   



const productSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    introduce: {
        type: String,
        required: true,
    },
    discount: {
        type: Schema.Types.Decimal128
    },
    importDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    productCategory: {
        type: Schema.Types.ObjectId,
        require: true
    },
    image: {
        type: [String],
        required: true
    },
    color: {
        type: [ColorSchema],
        required: true
    },
    size: {
        type: [SizeSchema],
        required: true
    },
    febricMaterial: {
        type: [FebSchema],
        required: true
    },
    sale:{
        type: Boolean,
        required: true
    }
}, schemaOptions);

productSchema.set('toJSON', {
    transform: (doc, ret) => {
      decimal2JSON(ret);
      return ret;
    }
  });

module.exports = mongoose.model('Product', productSchema);
