(function() {
  'use strict';

}());




var express       = require('express');
var cards         = express.Router();
var bodyParser    = require('body-parser');
var session       = require ('express-session');
var db            = require ('./../db/pg');

cards.use(function(req, res, next){
  console.log(req.session);
  //if user exists, allow next part to go through, else send 401`
  if (req.session.user){
    next();
  } else {
    res.status(401).json( {success: false, data:'not logged in'});
  }
});

cards.route('/')
  .get((req, res)=> {
    res.render('pages/home.ejs', {
      howdy:howdy
    });
  });

module.exports = cards;
