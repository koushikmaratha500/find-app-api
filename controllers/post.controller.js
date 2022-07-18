const PostModel = require('../models/post.model');
const _ = require('lodash');
exports.getAllPosts = (req, res, next) => {
    PostModel.find().sort({ createdAt: -1 })
        .then((response) => {
            res.send(response);
        })
        .catch((err) => next(err));
};

exports.createPost = (req, res, next) => {
    let { files } = req;
    let postUrlArr = _.map(files, (currentFile) => {
        return { mUrl: currentFile.location };
    });
    var newPost = new PostModel({ media: postUrlArr });
    newPost.save()
        .then(() => {
            res.json({ message: 'Post Created', code: 200, mediaUrls: postUrlArr })
        })
        .catch((err) => {
            res.json(err);
        });
};

exports.deleteAllPost = (req, res, next) => {
    PostModel.deleteMany({}).then((response) => {
        res.json({ message: 'Successfully Deleted', code: 200 });
    })
        .catch((err) => res.json(err));
};