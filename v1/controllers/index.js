const { hello } = require('./testController');
const { signUp } = require('./signupcontroller');
const { signIn } = require('./signincontroller');

module.exports = {
  hello,
  signUp,
  signIn,
};
