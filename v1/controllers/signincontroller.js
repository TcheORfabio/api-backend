'use strict';

const Boom = require('boom');
const { jwt } = require('../../auth');

const tokenManager = jwt;

const signIn = async (req, res) => {
  const { user } = req.auth.credentials;
  try {
    const token = await tokenManager.createToken({ id: user.email });
    return res.response({ user, token }).code(200);
  } catch (error) {
    throw Boom.badImplementation('There was an error during the sign In process - ERRMSG001', error);
  }
};

module.exports = {
  signIn,
};
