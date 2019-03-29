'use strict';

const { expect } = require('chai');
const Hapi = require('hapi');
const { hello } = require('../../../v1/controllers/testcontroller');

const server = Hapi.Server({
  port: process.env.PORT || 10010,
  host: 'localhost',
});
// server.register([{
//   // eslint-disable-next-line global-require
//   register: require('inject-then'),
// }]);

describe('Unit tests for testController', () => {
  beforeEach(async () => {
    await server.initialize();
  });
  afterEach(async () => {
    await server.stop();
  });

  context('testController', () => {
    it('should return a hello stranger string', async () => {
      const route = {
        path: '/v1/tests/{name}',
        method: 'GET',
        config: {
          tags: ['api'],
          handler: hello,
          validate: {
            options: {
              allowUnknown: true,
            },
          },
        },
      };
      server.route(route);
      const response = await server.inject({
        method: 'GET',
        url: '/v1/tests',
      });
      expect(response).to.deepEqual({ response: 'Hello stranger!' });
      expect(response.statusCode).to.equal(200);
    });
  });
});
