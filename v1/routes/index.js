'use strict';

const {
  hello,
  signUp,
  signIn,
  searchUser,
} = require('./routes');

module.exports = [
  hello,
  signUp,
  signIn,
  searchUser,
];
