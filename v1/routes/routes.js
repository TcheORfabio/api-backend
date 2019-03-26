'use strict';

const controller = require('../controllers');
const { testSchema } = require('../schemas');

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
      params: testSchema.request.hello,
    },
  },
};

module.exports = {
  hello,
};
