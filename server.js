(function() {
  'use strict';

}());

var bodyParser        = require('body-parser');
var db                = require('./db/pg');
var dotenv            = require ('dotenv');
var express           = require('express');
var methodOverride    = require ('method-override');
var morgan            = require('morgan');
var path              = require ('path');
var pg                = require('pg');
var pgSession         = require('connect-pg-simple');
var session           = require('express-session');
pry                   = require ('pryjs');

var app               = express();
//uncomment below when route is created
// var userRoutes        = require( path.join(__dirname, '/routes/users'));



var howdy = 'howdy!';
var username ='Karolin';




dotenv.load();
app.use(express.static('./public/'));

app.use(bodyParser.urlencoded( { extended:false } ));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('short'));

app.set ('view engine', 'ejs');

var stub = (req, res)=> res.send( req.method + ' method called. But functionality not added yet');


app.get('/', function(req,res){
  res.render('pages/home.ejs', {
    howdy:howdy,
    username:username
  });
});

//eventually...
//app.use('/cards', cardRoutes)

//temporary for testing db connectivity
app.get('/cards', function (req, res){
  res.render ('pages/options.ejs',{
    username:username
  });
});

app.get('/cards/list', db.showCards, function(req, res){
  res.render ('pages/cards.ejs', {
    cards: res.cards,
    username:username
  });
});

app.get('/signup', (req,res)=>{
  res.send ('show sign up page, eventually');
});

app.get('/logout', (req, res)=>{
  res.render ('pages/logout.ejs',{
    username:username
  });
});

app.get('/cards/new', function (req, res){
  res.render ('pages/cards_new.ejs',{
    username:username
  });
});

app.post('/cards/new', db.addCards, function(req,res) {
//res.send ("u did it u posted")
  res.redirect('/cards/list');
});

app.get('/cards/study', (req, res)=>{
  res.render ('pages/study.ejs',{
    username:username
  });
});

app.get('/cards/:id', db.showCards, function (req,res){
  var id = req.params.id-1;
  console.log(id)
  res.render ('pages/cards_one.ejs', {
    cards: res.cards[id],
    username:username
  });
});

app.put ('/cards/:id', db.updateCards, function(req, res){
  res.redirect('/cards/list');
})

app.delete('/cards/:id', db.deleteCards, function (req,res){
  res.redirect('/cards/list');
})

//
app.get('/cards/:id/edit', db.showCards, (req, res)=>{
  res.render ('pages/cards_one.ejs', res.rows);
});









var port = process.env.PORT || 3000;
var server = app.listen(port, () =>
  console.log ('Flash! ', port, '//', new Date()));
