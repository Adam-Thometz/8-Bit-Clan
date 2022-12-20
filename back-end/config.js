require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';
const PORT = +process.env.PORT || 3001;
const DATABASE_URI = process.env.HEROKU_POSTGRESQL_CRIMSON_URL || '8_bit_clan';
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  SECRET_KEY,
  PORT,
  DATABASE_URI,
  BCRYPT_WORK_FACTOR
};