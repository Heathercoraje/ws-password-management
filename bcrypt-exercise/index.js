'use strict';

const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) console.log(err);
      else {
        console.log(hash);
        callback(null, hash)
      }
      // Store hash in your password DB.
    });
  });
  // use bcrypt to hash the password and return it asynchronously
  //callback(new Error('TODO'));
};


//bcrypt.hash(password, 10, callback);




const comparePasswords = (password, hashedPassword, callback) => {
  // use bcrypt to compare the passwords and return a boolean asynchronously
  callback(new Error('TODO'));
};

module.exports = {
  comparePasswords,
  hashPassword
};
