const skills = require('../models/skills');
const { render } = require('../server');

module.exports = {
  index,
  show,
  new: newSkill,
  delete: deleteSkill,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  skills.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.somethingcrazy);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
};

function show(req, res) {
    const skill = skill.getOne(req.params.id);
    res.render('skills/show', { skill });
};
  
function index(req, res) {
    const skills = skills.getAll();
    res.render('skills/index', { skills });
};

//AM I EVEN GOING IN THE RIGHT DIRECTION? Never worked.