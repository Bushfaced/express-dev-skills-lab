const skills = [
    {id: 1, skill: slow},
    {id: 2, skill: blissful-ignorance},
    {id: 3, skill: aloof}
];

module.exports = {
    getAll,
    mySkills,
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
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill) {
    skill.id = Date.now() % 1;
    skill.done = false;
    skills.push(skill);
};

function mySkills(id) {
    id = parseInt(id);
    return skills.find((skills) => skills.id === id);
};


function getAll() {
    return skills;
};