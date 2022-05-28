const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const tagBlogSchema = new mongoose.Schema({
    tag: {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    }
}, schemaOptions);

module.exports = mongoose.model('TagBlog', tagBlogSchema);