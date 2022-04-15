const skills = [
    {id: 1234, skill: 'slow', quality: true},
    {id: 5678, skill: 'blissful-ignorance', quality: true},
    {id: 9012, skill: 'aloof', quality: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.find((skill) => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill) {
    skill.id = Math.floor(1000 + Math.random() * 9000);
    skill.quality = false;
    skills.push(skill);
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
};


function getAll() {
    return skills;
};