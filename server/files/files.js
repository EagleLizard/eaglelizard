const AWS = require('aws-sdk');
const sharp = require('sharp');
const fs = require('fs');
const stream = require('stream');

const config = require('../config');

const jpgRx = /\.jpg$/;

const s3 = new AWS.S3({
  region: config.region,
  accessKeyId: config.aws_access_key_id,
  secretAccessKey: config.aws_secret_access_key,
});

module.exports = {
  getFile,
  getObjects,
};

async function getObjects(req, res) {
  let objects, folders;
  // s3.listBucketsV((err, data) => {
  //   if(err) res.send(err);
  //   res.send(data);
  // });
  objects = await listObjectsV2();
  folders = objects.Contents.filter(object => {
    return object.Size === 0;
  });
  res.send(folders);
}

function listObjectsV2() {
  return new Promise((resolve, reject) => {
    let params;
    params = {
      Bucket: config.beanstalkId,
    };
    s3.listObjectsV2(params, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

function getFile(req, res) {
  let imageKey,
    // imageData,
    // cacheStream,
    contentType,
    // cacheFile
    folderKey,
    transformer,
    width,
    s3Request,
    imageStream
  ;

  width = req.query.width;
  console.log(width);
  imageKey = req.params.image || req.params.folder;
  folderKey = req.params.image ? `/${req.params.folder}` : '';
  console.log('imageKey');
  console.log(imageKey);
  console.log('folderKey');
  console.log(folderKey);

  s3Request = s3.getObject({
    Bucket: `${config.beanstalkId}${folderKey}`,
    Key: imageKey,
  });

  s3Request.on('httpHeaders', (status, headers) => {
    contentType = headers['content-type'];
  });

  imageStream = s3Request.createReadStream();

  imageStream.on('error', err => {
    if(err.message === 'NoSuchKey') {
      console.error(`${err.message}: ${imageKey}`);
    } else {
      console.error(err);
    }
  });

  if(width && !isNaN(+width)) {
    transformer = sharp().resize(+width);

    if(jpgRx.test(imageKey)) {
      transformer.jpeg({
        quality: 100,
      });
    }

    transformer.on('error', err => {
      console.error(err);
    });

    imageStream = imageStream.pipe(transformer);
  }

  // imageStream.on('end', () => {
  //   res.end('ok');
  // });

  imageStream.pipe(res);
  res.setHeader('Access-Control-Allow-Origin', '*');
}
