const Skill = require('../models/skills');


module.exports = {
  index,
  show,
  create,
  new: newSkill,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.quality = !!req.body.quality;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
};

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
};

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills'); 
};

function newSkill(req, res) {
  res.render('skills/new');
};

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
};
  
function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
};

