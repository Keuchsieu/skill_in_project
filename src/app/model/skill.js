const mongoose = require("mongoose");

var skillSchema = mongoose.Schema({
  skill_name: String, // the content here is a searchable item
  action: String
});

export default skillSchema;