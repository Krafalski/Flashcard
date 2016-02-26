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

var app                = express();

dotenv.load();
app.use(express.static('./public/'));
app.use(morgan('short'));

app.set ('view engine', 'ejs');


app.get('/', function(req,res){
  res.send('Hello there');
});




var port = process.env.PORT || 3000;
var server = app.listen(port);
