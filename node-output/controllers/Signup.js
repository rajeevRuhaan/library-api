'use strict';

var utils = require('../utils/writer.js');
var Signup = require('../service/SignupService');

module.exports.signupPOST = function signupPOST (req, res, next, body) {
  Signup.signupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
