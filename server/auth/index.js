var express = require('express');
var router = express.Router();

router.use('/login',require('./Local/index'))

module.exports = router