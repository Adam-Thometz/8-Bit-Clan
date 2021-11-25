"use strict";

const Work = require('../models/work');
const express = require('express');
const {ensureLoggedIn} = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const works = await Work.getLatestWorks();
    return res.json({works});
  } catch (e) {
    return next(e);
  }
})

router.post('/save', ensureLoggedIn, async (req, res, next) => {
  try {
    const work = await Work.save(req.body);
    return res.json({work});
  } catch(e) {
    return next(e);
  }
});

router.get('/load/:workId', ensureLoggedIn, async (req, res, next) => {
  try {
    const work = await Work.load(req.params.workId);
    return res.json({work});
  } catch(e) {
    return next(e);
  }
});

module.exports = router;