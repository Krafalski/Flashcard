(function() {
  'use strict';

}());


var howdy = 'howdy!';



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

dotenv.load();
app.use(express.static('./public/'));

app.use(bodyParser.urlencoded( { extended:false } ));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('short'));

app.set ('view engine', 'ejs');


app.get('/', function(req,res){
  console.log ('yes');
  res.render('pages/home.ejs', {
    howdy:howdy
  });
});

//temporary for testing db connectivity
app.get('/cards', db.showCards, function (req, res){
  res.send ('show cards, eventually', res.rows);
});

app.get('/cards/new', db.addCards, function (req, res){
  res.send ('add a new card, eventually', res.rows);
});



var port = process.env.PORT || 3000;
var server = app.listen(port, () =>
  console.log ('Flash! ', port, '//', new Date()));
