const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const blogCommentSchema = new mongoose.Schema({
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('BlogComment', blogCommentSchema);