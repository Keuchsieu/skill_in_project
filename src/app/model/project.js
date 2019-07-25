const mongoose = require('mongoose');
import skillSchema from './skill';

var inputSchema = mongoose.Schema({
  proj_name: String,
  skills_involved: skillSchema,
  situation: String,
  task: String
});

export default inputSchema;