const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const publicPath = path.join(__dirname, '/public');

const port = process.env.PORT || 8000;
const db_path = 'mongodb://localhost/27017';

mongoose.connect(db_path, {useNewUrlParser: true});

const db = mongoose.connection;

app.use(express.static(publicPath));
app.use(express.urlencoded());
app.use(express.json());

app.get('', (req, res)=>{
  res.send("Main page");
});

const server = app.listen(port, ()=>{
  console.log("Listening on port" + port);
})