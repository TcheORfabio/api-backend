'use strict';

const Boom = require('boom');
const { jwt } = require('../../auth');
const { schemas } = require('../../database');

const { User } = schemas;

const tokenAuth = async (token) => {
  if (!token) throw  Boom.unauthorized('Access token is invalid');

  try {
    const decoded = await jwt.verifyToken(token);
    return decoded;
  } catch (error) {
    if (error.name === 'TokenExpiredError') throw Boom.preconditionFailed('Invalid Session', error);
    throw  Boom.unauthorized('Access token is invalid', error);
  }
};

const searchUser = async (req, res) => {
  const paramId = req.params.id;
  const token = req.headers['x-access-token'];

  const decoded = await tokenAuth(token);
  const user = await User.findOne({ uuid: paramId })
    .lean();
  if (decoded.id !== user.email) throw Boom.unauthorized('Not Authorized');

  return res.response({ user }).code(200);
};

module.exports = {
  searchUser,
};
