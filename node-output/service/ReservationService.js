'use strict';


/**
 * create reservation
 * user reservation information created
 *
 * body Reservation create reservation
 * returns List
 **/
exports.reservationPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reservedDate" : "2000-01-23T04:56:07.000+00:00",
  "quantity" : 0.8008281904610115,
  "userId" : "userId",
  "bookId" : "bookId",
  "returnedDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "reservedDate" : "2000-01-23T04:56:07.000+00:00",
  "quantity" : 0.8008281904610115,
  "userId" : "userId",
  "bookId" : "bookId",
  "returnedDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

