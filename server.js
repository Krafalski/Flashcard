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

dotenv.load();
app.use(express.static('./public/'));

app.use(bodyParser.urlencoded( { extended:false } ));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(morgan('short'));

app.set ('view engine', 'ejs');


app.get('/', function(req,res){
  res.send('Hello there');
});




var port = process.env.PORT || 3000;
var server = app.listen(port);
