const Boom = require('boom');
const { jwt } = require('./jwt');

module.exports = async (req) => {
  const token = req.headers.Authorization;
  if (!token) throw  Boom.unauthorized('Access token is invalid');

  const decoded = await jwt.verifyToken(token);
  if (!decoded) throw  Boom.unauthorized('Access token is invalid');

  return { isValid: true, credentials: { decoded } };
};
