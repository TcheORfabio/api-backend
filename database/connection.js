const mongoose = require('mongoose');
const config = require('../config');

const dbURI = config.app.mongodbUri;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(dbURI,
  { useNewUrlParser: true });

const db = mongoose.connection;
db.on('connected', () => {
  console.debug('Conectou ao banco de dados:');
});

db.on('error', (err) => {
  console.error('Mongoose informa um erro na conexão: %o', err);
});

db.on('disconnected', () => {
  console.debug('Mongoose conexão terminada');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Terminando a aplicação');
    process.exit(0);
  });
});

module.exports = mongoose;
