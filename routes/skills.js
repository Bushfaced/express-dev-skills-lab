var express = require('express');
var router = express.Router();
// Require the controller for todos
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/todos'
// because this router is mounted in 
// server.js with a starts with path of
// /todos 

// GET /todos (index functionality)
router.get('/', skillsCtrl.index);