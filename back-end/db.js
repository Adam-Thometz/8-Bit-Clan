"use strict";

const {Client} = require('pg');
const {DATABASE_URI} = require('./config');

let db;

if (process.env.NODE_ENV === 'production') {
  db = new Client({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
} else {
  db = new Client({
    connectionString: DATABASE_URI
  });
};

db.connect();

module.exports = db;