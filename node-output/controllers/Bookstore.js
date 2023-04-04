'use strict';

var utils = require('../utils/writer.js');
var Bookstore = require('../service/BookstoreService');

module.exports.bookstorePOST = function bookstorePOST (req, res, next, body) {
  Bookstore.bookstorePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
