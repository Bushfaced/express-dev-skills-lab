const skills = [slow, ignorant, aloof];

module.exports = {
    getAll,
    mySkills,
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
    todos.splice(idx, 1);
};

function mySkills(id) {
    id = parseInt(id);
    return skills.find((skills) => skills.id === id);
};


function getAll() {
    return skills;
};