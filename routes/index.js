var express = require('express');
var router = express.Router();
const postCtrl = require('../controllers/post.controller');
const { uploadPostsToS3 } = require('../middlewares/video.middleware');

/* get posts. */
// router.post('/createPost',  postCtrl.createPost);
router.post('/createPost', uploadPostsToS3.array('posts', 6), postCtrl.createPost);
router.get('/getAllPosts', postCtrl.getAllPosts);
router.get('/deleteAllPosts', postCtrl.deleteAllPost);

module.exports = router;