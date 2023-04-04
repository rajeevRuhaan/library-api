'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userPOST = function userPOST (req, res, next, email, password) {
  User.userPOST(email, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
