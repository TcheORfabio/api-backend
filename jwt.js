const jwt = require('jsonwebtoken');

const createToken = async ({ id }) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 1800 });

const verifyToken = async token => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  createToken,
  verifyToken,
};
