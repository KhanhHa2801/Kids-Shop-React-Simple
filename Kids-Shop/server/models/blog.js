const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const ColorSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const SizeSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const FebSchema = new Schema( {name: String, percentPrice: Schema.Types.Decimal128 });
const ProductSchema = new mongoose.Schema( {
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
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

const CommentShema = new mongoose.Schema( {id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId()
},
date: {
    type: Date,
    required: true
},
content: {
    type: String,
    required: true
}} )

const FeedbackSchema = new mongoose.Schema( {id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId()
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
    }
});

const tagSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    name: {
        type: String,
        required: true
    }
})

const blogSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: [userSchema],
        ref: "User",
        required: true
    },
    comment: {
        type: [CommentShema],
        ref: "Comment",
        required: true
    },
    tag: {
        type: [tagSchema],
        ref: "Tag",
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('Blog', blogSchema);