const mongoDBUrl = 'mongodb://testUser:testUser123@65.1.198.230:28899/testDb';

const s3Config = {
    bucketName: 'findappbc',
    dirName: 'uploads', /* optional */
    region: 'ap-south-1',
    accessKeyId: 'AKIAYUENRQP2NGZ24ERR',
    secretAccessKey: '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',
    // s3Url: 'https://my-s3-url.com/', /* optional */
};

module.exports = {mongoDBUrl, s3Config};
