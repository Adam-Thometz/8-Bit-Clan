"use strict";

const User = require('../models/user');
const express = require('express');
const { ensureLoggedIn } = require('../middleware/auth');
const router = express.Router();

/** GET /users/:username */
router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.getUser(req.params.username);
    return res.json({user});
  } catch(e) {
    return next(e);
  }
});

router.get('/works/:username', ensureLoggedIn, async (req, res, next) => {
  try {
    const works = await User.getUserWorks(req.params.username);
    return res.json({works})
  } catch(e) {
    return next(e);
  }
})

module.exports = router;