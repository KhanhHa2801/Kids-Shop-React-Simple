const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const Schema = mongoose.Schema;
const ColorSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const SizeSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const FebSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });

const ProductSchema = new Schema( {
    id: String,
    name: String,
    price: String,
    introduce: String,
    discount: Schema.Types.Decimal128,
    importDate: Date,
    description: String,
    inStock: Number,
    image: [String],
    color: [ColorSchema],
    size: [SizeSchema],
    febricMaterial: [FebSchema],
    sale: Boolean
});

const CommentShema = new Schema( {id: {
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
}} )



const FeedbackSchema = new Schema( {id: {
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
}} );


const userSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        first: {
            type: String,
            required: true
        }, 
        last: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    },
    wishlist: {
        type: [ProductSchema],
        required: true
    },
    comment: {
        type: [CommentShema],
        required: true
    },
    feedback: {
        type: [FeedbackSchema],
        required: true
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    listProduct: {
        type: [Schema.Types.ObjectId],
        ref: "Product",
        required: true
    },
    totalBill: {
        type: Schema.Types.Decimal128
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
userSchema.set('toJSON', {
    transform: (doc, ret) => {
      decimal2JSON(ret);
      return ret;
    }
  });

module.exports = mongoose.model('User', userSchema);