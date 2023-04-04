'use strict';


/**
 * create user
 * create user account if not created 
 *
 * email String The user email for login
 * password String The password for login in clear text
 * returns List
 **/
exports.userPOST = function(email,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "createdDate" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : "user@email.com"
}, {
  "password" : "password",
  "createdDate" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : "user@email.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

