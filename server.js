'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./v1/routes');
const registers = require('./register');
const auth = require('./auth');

const validate = auth.auth;
const tokenValidate = auth.tokenauthentication;

module.exports = (async () => {
  const server = Hapi.server({ port: config.app.port, router: { isCaseSensitive: false } });
  await server.register(registers);
  server.auth.strategy('simple', 'basic', { validate });
  server.auth.strategy('token', 'basic', { validate: tokenValidate });
  server.route(routes);
  return server;
})();
