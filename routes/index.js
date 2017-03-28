const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, Scaffold !!'}));

module.exports = router;
