const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const pokeMon = require('./pokemon');


const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.listen(port, function() {
  console.log("App is listening");
});

app.get("/", function (req, res) {
  res.send("I am listening");
});

app.get('/pokemon', (req, res) => {
  res.send(pokeMon) 
});





















