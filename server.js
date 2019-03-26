'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./v1/routes');
const registers = require('./register');

module.exports = (async () => {
  const server = Hapi.server({ port: config.app.port, router: { isCaseSensitive: false } });
  server.route(routes);
  await server.register(registers);
  return server;
})();
