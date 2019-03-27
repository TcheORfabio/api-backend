'use strict';

const Boom = require('boom');
const shortId = require('shortid');
const { schemas } = require('../../database');

const { User } = schemas;

const signUp = async (req, res) => {
  const q = req.payload;
  const userData = {
    uuid: shortId.generate(),
    name: q.name,
    email: q.email,
    password: q.password,
    phones: q.phones,
  };

  console.log('User: %o', userData);

  const user = new User(userData);
  try {
    const userDataResponse = await user.save();
    return res.response(userDataResponse).code(200);
  } catch (error) {
    if (error.message.includes('duplicate key error')) throw Boom.conflict('E-mail já existente', error);
    throw Boom.badRequest('There was an error while trying to persist User\'s data', error);
  }
};

module.exports = {
  signUp,
};
