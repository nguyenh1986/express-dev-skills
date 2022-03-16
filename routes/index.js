var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.indexView);

module.exports = router;