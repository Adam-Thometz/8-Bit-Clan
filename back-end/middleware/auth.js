"use strict";

const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config');
const { UnauthorizedError } = require('../expressError')

/** Middleware: Authenticate user.
 * If a token is provided, verify it and, if valid, store the token payload
 * on res.locals for other middleware functions to deal with.
 * 
 */

function authenticateJWT(req, res, next) {
  try {
    const authHeader = req.headers && req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace(/^[Bb]earer /, "").trim();
      res.locals.user = jwt.verify(token, SECRET_KEY);
    }
    return next();
  } catch (e) {
    return next();
  };
};

function ensureLoggedIn(req, res, next) {
  try {
    if (!res.locals.user) throw new UnauthorizedError();
    return next()
  } catch(e) {
    return next(e)
  };
};

module.exports = {
  authenticateJWT,
  ensureLoggedIn
};