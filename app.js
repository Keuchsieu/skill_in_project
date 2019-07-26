// packages
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Schemas
const SkillSchema = require('./src/app/model/skill');
const ProjectSchema = require('./src/app/model/project');

// Globals
const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 8000;
const db_path = 'mongodb://localhost/27017';

// Database
mongoose.connect(db_path, {useNewUrlParser: true});
const db = mongoose.connection;

app.use(express.static(publicPath));
app.use(express.urlencoded());
app.use(express.json());

app.get('', (req, res)=>{
  res.send("Main page");
});

app.post('/save', (req, res)=>{
  let Skill = mongoose.model('Skill', SkillSchema);
  let skill_test = new Skill(
    {
      skill_name: "NodeJS", 
      action: "Making this web app"
    }
  );
  skill_test.save().then(
    ()=>{
      console.log("saved one");
    }
  );
  Skill.findOne({}, 'skill_name action', (err, skill)=>{
    if (err) console.log(err);
    console.log(skill);
  });
  res.send("ok");
});

app.post('/getall', (req, res)=>{
  console.log(req);
});

app.post('getone/', (req, res)=>{
  console.log(req);
});

const server = app.listen(port, ()=>{
  console.log("Listening on port" + port);
});