const { hello } = require('./testController');
const { signUp } = require('./signupcontroller');
const { signIn } = require('./signincontroller');
const { searchUser } = require('./searchusercontroller');

module.exports = {
  hello,
  signUp,
  signIn,
  searchUser,
};
