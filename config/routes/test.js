var express = require('express');
var router = express.Router();
var controllers = require('../../src/controllers/test');
var Utils = require('../../src/services/Utils');

router.post('/register', controllers.add)

module.exports = router;