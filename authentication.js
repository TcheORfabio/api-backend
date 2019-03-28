const Bcrypt = require('bcryptjs');
const Boom = require('boom');
const { schemas } = require('./database');

const { User } = schemas;

module.exports = async (req, username, password) => {
  if (!username || !password) return { isValid: false, credentials: null };

  const user = await User.findOne({ email: username }).select('+password');
  if (!user) throw Boom.notFound('Usuário e/ou senha inválidos');
  const isValid = await Bcrypt.compare(password, user.password);
  if (!isValid) throw Boom.unauthorized('Usuário e/ou senha inválidos');
  delete user.password;
  const credentials = { user };

  return { isValid, credentials };
};
