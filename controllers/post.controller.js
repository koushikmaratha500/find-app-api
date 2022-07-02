const PostModel = require('../models/post.model');
const _ = require('lodash');
exports.getAllPosts = (req, res, next) => {
    PostModel.find()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => next(err));
}

exports.createPost = (req, res, next) => {
    let { files } = req;
    let postUrlArr = _.map(files, (currentFile) => {
        return { mUrl: currentFile.location };
    })
    var newPost = new PostModel({ media: postUrlArr });
    newPost.save()
        .then(() => {
            res.json({ message: 'Post Created', code: 200 })
        })
        .catch((err) => {
            next(err);
        });
}