const Skill = require('../models/skills')

const indexView = (req, res) => {
    res.render("skills/index", {
        skills: Skill.getSkills()
    } );
}

const show = (req, res) => {
    res.render('skills/show', {
        skill: Skill.getSkills()[req.params.id]
    })
}

module.exports = {
    indexView,
    show
}