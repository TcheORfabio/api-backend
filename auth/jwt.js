const jwt = require('jsonwebtoken');
const config = require('../config');

const { secret } = config.app;

const createToken = async ({ id }) => jwt.sign({ id }, secret, { expiresIn: '30m' });

const verifyToken = async token => jwt.verify(token, secret);

module.exports = {
  createToken,
  verifyToken,
};
