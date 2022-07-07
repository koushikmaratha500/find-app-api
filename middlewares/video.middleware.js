var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
const {s3Config} = require('../config');

var s3 = new aws.S3({
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,
    Bucket: s3Config.bucketName,
    region: s3Config.region
 });

const uploadPostsToS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: s3Config.bucketName,
        acl: 'public-read',
        contentType: function (req, file, cb) {
            cb(null, file.mimetype);
        },
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, `${Date.now().toString()}-${file.originalname}`.trim())
        }
    })
 })

module.exports = {uploadPostsToS3};