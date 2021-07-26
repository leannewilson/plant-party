const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    post: String,
    comments: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Post', postSchema);