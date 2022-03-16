var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

var skillsController = require('../controllers/skills');

/* GET home page. */
router.get('/', skillsController.indexView);
router.get('/:id', skillsController.show);

module.exports = router;
