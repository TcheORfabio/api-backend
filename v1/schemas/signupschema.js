const Joi = require('joi');

const request = {
  signUp: {
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    phones: Joi.array().items(
      Joi.object().keys({
        number: Joi.string().regex(/^[0-9]+$/, 'numbers'),
        ddd: Joi.string().length(2).regex(/^[0-9]+$/, 'numbers'),
      }),
    ),
  },
};

module.exports = { request };
