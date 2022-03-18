const skills = [
    { name: "skill 1", id: 0, description: "desc 1"},
    { name: "skill 2", id: 1, description: "desc 2"},
    { name: "skill 3", id: 2, description: "desc 3"},
    { name: "skill 4", id: 3, description: "desc 4"},
    { name: "skill 5", id: 4, description: "desc 5"},
    { name: "skill 6", id: 5, description: "desc 6"}
]

function getSkills() {
    return skills;
}

function getOne(id) {
    const index = skills.findIndex(e => e.id == id)
    return skills[index]
}

function deleteOne(id) {
    const index = skills.findIndex(e => e.id == id)
    skills.splice(index, 1);
}

function addOne(model) {
    skills.push(model)
}

module.exports = {
    getSkills,
    getOne,
    deleteOne, 
    addOne
}