
const request = require('request');

module.exports = {
  getRandomUsers,
};

function getRandomUsers(req, res) {
  _getRandomUsers(20).then(users => res.send({
    users,
  }));
}

function _getRandomUsers(numUsers) {
  return Promise.all(
    Array(numUsers).fill(0).map(() =>
      getRandomUser()
    )
  );
}

function getRandomUser() {
  return new Promise((resolve, reject) => {
    let qs, options;
    qs = {
      dataType: 'json',
    };
    options = {
      qs,
      json: true,
    };
    request('https://randomuser.me/api/', options, (err, resp, body) => {
      if(err) return reject(err);
      resolve(body);
    });
  });
}
