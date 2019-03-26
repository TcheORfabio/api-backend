const Joi = require('joi');

const request = {
  hello: {
    name: Joi.string(),
  },
};

module.exports = { request };
