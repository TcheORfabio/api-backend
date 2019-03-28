'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./v1/routes');
const registers = require('./register');
const validate = require('./authentication');

module.exports = (async () => {
  const server = Hapi.server({ port: config.app.port, router: { isCaseSensitive: false } });
  await server.register(registers);
  server.auth.strategy('simple', 'basic', { validate });
  server.route(routes);
  return server;
})();
