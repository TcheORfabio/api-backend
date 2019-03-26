'use strict';

const hello = (req, res) => {
  const name = req.params.name || 'stranger';
  const response = `Hello ${name}!`;
  return res.response({ response }).code(200);
};

module.exports = {
  hello,
};
