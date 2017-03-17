const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(path.join(__dirname, '..', 'dist', 'index.html')));
});

router.get('/hello', (req, res, next) => res.send({msg: 'Hello, World!'}));

module.exports = router;
