
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { schemaOptions } = require('./modelOptions');

// const SchemaTypes = mongoose.Schema.Types;
// const ColorSchema = new Schema( {name: String, percentPrice: SchemaTypes.Decimal128 });
// const SizeSchema = new Schema( {name: String, percentPrice: SchemaTypes.Decimal128 });
// const FebSchema = new Schema( {name: String, percentPrice: SchemaTypes.Decimal128 });

// const ProductSchema = new Schema( {
//     id: String,
//     name: String,
//     price: String,
//     introduce: String,
//     discount: SchemaTypes.Decimal128,
//     importDate: Date,
//     description: String,
//     inStock: Number,
//     image: [String],
//     color: [ColorSchema],
//     size: [SizeSchema],
//     febricMaterial: [FebSchema],
//     sale: Boolean
// })

const categorySchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    listProduct: {
        // type: [ProductSchema],
        type: [Schema.Types.ObjectId],
        ref: "Product",
        required: true
    },
}, schemaOptions);

module.exports = mongoose.model('Category', categorySchema);