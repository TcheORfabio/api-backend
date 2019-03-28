module.exports = {
  app: {
    port: process.env.PORT || 10010,
    mongodbUri: process.env.DBURI,
    saltRounds: process.env.SALT_ROUNDS,
    secret: process.env.JWT_SECRET,
  },
};
