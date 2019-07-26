const mongoose = require('mongoose');
const SkillSchema = require('./skill');

var ProjectSchema = mongoose.Schema({
  proj_name: String,
  skills_involved: [SkillSchema],
  situation: String,
  task: String
});


module.exports = ProjectSchema;