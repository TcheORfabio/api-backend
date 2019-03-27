'use strict';

const Boom = require('boom');
const { schemas } = require('../../database');

const { User } = schemas;

const signIn = async (req, res) => {
  const q = req.query;
  const loginData = {
    email: q.email,
    password: q.password,
  };

  console.log('Login: %o', loginData);

  try {
    const user = await User.findOne({ email: loginData.email, password: loginData.password });
    console.log('Login realizado: %o', user);
    return res.response(user).code(200);
  } catch (error) {
    console.log('Error: ', error);
    throw Boom.notFound('Usuário e/ou senha inválidos');
  }
};

module.exports = {
  signIn,
};
