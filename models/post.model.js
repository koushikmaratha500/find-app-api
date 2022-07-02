var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
    media: [{ mUrl: String }],
    postStatus: {
        type: String,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema, 'fnd_posts');