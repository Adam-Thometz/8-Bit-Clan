"use strict"

const User = require('../models/user')
const express = require('express')
const router = express.Router()
const createToken = require('../token')

/** POST /auth/register
 * Creates an account for a new user and gets a token for the user
 * No authorization required; anyone can create an account
 */

router.post('/register', async (req, res, next) => {
  try {
    const newUser = await User.register({...req.body});
    const token = createToken(newUser);
    return res.status(201).json({token});
  } catch(e) {
    return next(e)
  };
});

/** POST /auth/login
 * Gets token for an existing user
 * No authorization required; anyone with an account can log in
 */

router.post('/login', async (req, res, next) => {
  try {
    const {username, password} = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({token});
  } catch (e) {
    return next(e);
  };
});

module.exports = router;