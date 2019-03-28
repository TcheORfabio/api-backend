const Joi = require('joi');

const request = {
  searchUser: {
    id: Joi.string(),
  },
};

module.exports = { request };
