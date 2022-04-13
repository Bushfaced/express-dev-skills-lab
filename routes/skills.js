var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.put('/:id', skillsCtrl.update);
router.delete('/:somethingcrazy', skillsCtrl.delete);

module.exports = router;