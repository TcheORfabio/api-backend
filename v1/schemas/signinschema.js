const Joi = require('joi');

const request = {
  signIn: {
    email: Joi.string(),
    password: Joi.string(),
  },
};

module.exports = { request };
