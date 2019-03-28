const vision = require('vision');
const inert = require('inert');
const hapiAuth = require('hapi-auth-basic');

module.exports = [
  inert,
  vision,
  hapiAuth,
];
