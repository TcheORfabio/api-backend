'use strict';

const controller = require('../controllers');
const schemas = require('../schemas');

const hello = {
  path: '/v1/tests/{name}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.hello,
    validate: {
      options: {
        allowUnknown: true,
      },
      params: schemas.testSchema.request.hello,
    },
  },
};

const signUp = {
  path: '/v1/signup',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: controller.signUp,
    validate: {
      options: {
        allowUnknown: true,
      },
      query: schemas.signupSchema.request.signUp,
    },
  },
};

const signIn = {
  path: '/v1/signin',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.signIn,
    auth: 'simple',
    validate: {
      options: {
        allowUnknown: true,
      },
    },
  },
};

const searchUser = {
  path: '/v1/user/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.searchUser,
    auth: 'simple',
    validate: {
      options: {
        allowUnknown: true,
      },
      params: schemas.searchUserSchema.request.searchUser,
    },
  },
};

module.exports = {
  hello,
  signUp,
  signIn,
  searchUser,
};
