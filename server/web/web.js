
const path = require('path');

const PUBLIC_WEB_DIRECTORY = path.resolve(`${__dirname}/../../web/dist/`);

module.exports = {
  PUBLIC_WEB_DIRECTORY,
  getIndexPage,
};

function getIndexPage(req, res) {
  res.sendFile(`${PUBLIC_WEB_DIRECTORY}/index.html`);
}
