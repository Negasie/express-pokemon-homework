const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const pokeMon = require('./pokemon');

const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static('static'));

app.listen(port, function() {
  console.log("App is listening");
});

app.get("/", function (req, res) {
  res.send("I am listening");
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
  		"pokemon": pokeMon
  })
});

app.get('/pokemon/:id/', (req,res) => {
  res.render('show.ejs', {
  		"pokemon": pokeMon[req.params.id]
  })
})

app.get('/new', (req, res) => {
    res.render('new.ejs');
});


app.post('/pokemon/new', (req, res) => {
  pokeMon.push(req.body);
  res.redirect('/pokemon');
});

app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {pokemon: pokeMon[req.params.id], id: req.params.id});
});

app.put('/pokemon/:id', (req, res) => {
    pokeMon[req.params.id] = req.body;
    res.redirect('/pokemon');
})

app.delete('/pokemon/:id', (req, res) => {
    pokeMon.splice(req.params.id, 1)
    res.redirect('/pokemon');
})


module.exports = app;








