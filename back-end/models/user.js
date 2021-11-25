"use strict";

const bcrypt = require('bcrypt');
const db = require('../db')
const {BCRYPT_WORK_FACTOR} = require('../config');
const { NotFoundError, BadRequestError, UnauthorizedError } = require('../expressError');

class User {
  /** Register new user */
  static async register({username, password}) {
    const duplicateCheck = await db.query(`
      SELECT username
      FROM users
      WHERE username = $1
    `, [username])

    if (duplicateCheck.rows[0]) throw new BadRequestError(`${username} already taken!`)

    const hashedPw = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const res = await db.query(`
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING username, password
    `, [username, hashedPw]);

    return res.rows[0];
  };

  /** Authenticate user for logging in  */
  static async authenticate(username, password) {
    const res = await db.query(`
      SELECT username, password
      FROM users
      WHERE username = $1
    `, [username]);

    const user = res.rows[0];

    if (user && bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw new UnauthorizedError('Invalid username/password!')
    };
  };

  /** Get a user
   * Returns an object (ie. {username: 'ILikeKitties'}).
   */
  static async getUser(username) {
    const res = await db.query(`
      SELECT username
      FROM users
      WHERE username = $1
    `, [username]);

    const user = res.rows[0];
    if (!user) throw new NotFoundError("User not found");

    return user;
  };

  static async getUserWorks(username) {
    const res = await db.query(`
      SELECT id, title, composition
      FROM works
      WHERE author = $1
    `, [username]);

    return res.rows;
  };
};

module.exports = User;