const skills = [stupid, lazy, slow, ignorant, aloof];

module.exports = {
    mySkills
};

function mySkills(id) {
    id = parseInt(id);
    return skills.find((skills) => skills.id === id);
};
 