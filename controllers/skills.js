const res = require('express/lib/response');
const Skill = require('../models/skills')

const indexView = (req, res) => {
    res.render("skills/index", {
        skills: Skill.getSkills()
    } );
}

const show = (req, res) => {
    console.log('show')
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

const newView = (req, res) => {
    console.log('new view')
    res.render('skills/new')
}

const createSkill = (req, res) => {
    let skill = req.body
    console.log(req.body);
    // assign a random id
    skill.id = new Date().getTime()
    Skill.addOne(req.body)
    res.redirect('/skills')
}

const deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}
module.exports = {
    indexView,
    show,
    newView,
    createSkill,
    deleteSkill
}