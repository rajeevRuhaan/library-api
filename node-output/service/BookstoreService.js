'use strict';


/**
 * create a book by admin
 * admin user can created book
 *
 * body BookStore create book
 * returns List
 **/
exports.bookstorePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "imageUrl" : "imageUrl",
  "name" : "name",
  "description" : "description",
  "publisher" : "publisher",
  "ISBN13" : "ISBN13",
  "published date" : "published date",
  "authors" : "authors"
}, {
  "imageUrl" : "imageUrl",
  "name" : "name",
  "description" : "description",
  "publisher" : "publisher",
  "ISBN13" : "ISBN13",
  "published date" : "published date",
  "authors" : "authors"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

