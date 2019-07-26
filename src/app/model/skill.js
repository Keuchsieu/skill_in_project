const mongoose = require("mongoose");

var SkillSchema = mongoose.Schema({
  skill_name: String, // the content here is a searchable item
  action: String
});

module.exports = SkillSchema;