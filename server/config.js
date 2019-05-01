
const dotenv = require('dotenv');

dotenv.config('../.env');

const config = {
  region: 'us-west-1',
  aws_access_key_id: process.env.aws_access_key_id,
  aws_secret_access_key: process.env.aws_secret_access_key,
  beanstalkId: process.env.aws_beanstalk_id,
};

console.log(config);

module.exports = config;
