"use strict";

const {Client} = require('pg');
const {DATABASE_URI} = require('./config');

let db;

if (process.env.NODE_ENV === 'production') {
  console.log('*************************************', DATABASE_URI)
  db = new Client({
    connectionString: DATABASE_URI,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: DATABASE_URI
  });
};

db.connect();

module.exports = db;