'use strict';

const Boom = require('boom');
const shortId = require('shortid');
const Bcrypt = require('bcryptjs');
const tokenManager = require('../../jwt');
const { schemas } = require('../../database');

const { User } = schemas;

const signUp = async (req, res) => {
  const q = req.payload;
  let hash;
  try {
    const salt = await Bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10));
    hash = await Bcrypt.hash(q.password, salt);
  } catch (error) {
    throw Boom.badImplementation('There was an error while trying to persist User\'s data - MSGERR001', error);
  }

  const userData = {
    uuid: shortId.generate(),
    name: q.name,
    email: q.email,
    password: hash,
    phones: q.phones,
    lastLoginAt: Date.now(),
  };

  console.log('User: %o', userData);

  try {
    const user = await User.findOneAndUpdate({ email: userData.email }, userData, { upsert: true, new: true });
    const token = await tokenManager.createToken({ id: user.id });
    return res.response({ user, token }).code(200);
  } catch (error) {
    if (error.message.includes('duplicate key error')) throw Boom.conflict('E-mail e/ou usuário já existente', error);
    throw Boom.badRequest('There was an error while trying to persist User\'s data - MSGERR002', error);
  }
};

module.exports = {
  signUp,
};
