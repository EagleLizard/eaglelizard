
const express = require('express');

const health = require('./health/health');
const web = require('./web/web');
const randUsers = require('./rand-user/rand-user');
const files = require('./files/files');

module.exports = {
  register,
};

function register(app) {
  app.use('/dist', express.static(web.PUBLIC_WEB_DIRECTORY));
  app.get('/', web.getIndexPage);
  app.get('/health', health.check);
  app.get('/rand-users', randUsers.getRandomUsers);
  app.get('/files', files.getObjects);
  app.get('/files/:folder/:image?', files.getFile);
}
