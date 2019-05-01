
const express = require('express');

const routes = require('./routes');

const app = express();
const PORT = 4666;

module.exports = {
  initServer,
};

function initServer() {
  routes.register(app);

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

