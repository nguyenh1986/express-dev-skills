var express = require('express');
var router = express.Router();

var skillsController = require('../controllers/skills');

router.get('/', skillsController.indexView);
router.get('/new', skillsController.newView)
router.get('/:id', skillsController.show);

router.post('/', skillsController.createSkill);
router.delete('/:id', skillsController.deleteSkill);


module.exports = router;
