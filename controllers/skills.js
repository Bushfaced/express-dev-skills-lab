const skills = require('../models/skills');
const { render } = require('../server');

module.exports = {
  index,
  show,
};

function show(req, res) {
    // Access all route params using req.params (object)
    const skill = skill.getOne(req.params.id);
    res.render('skills/show', { skill });
};
  
  // controller action <--> controller function
function index(req, res) {
    const todos = Todo.getAll();
    res.render('skills/index', { skills });
};