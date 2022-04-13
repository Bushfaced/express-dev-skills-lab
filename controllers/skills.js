const skills = require('../models/skills');
const { render } = require('../server');

module.exports = {
  index,
  show,
};

function show(req, res) {
    const skill = skill.getOne(req.params.id);
    res.render('skills/show', { skill });
};
  

function index(req, res) {
    const skills = skills.getAll();
    res.render('skills/index', { skills });
};

//AM I EVEN GOING IN THE RIGHT DIRECTION?