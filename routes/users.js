//IFFE
(function() {
  'use strict';

}());

//DEPENDENCIES
var express         = require('express');
var users           = express.Router();
var bodyParser      = require('body-parser');
var db              = require ('./../db/pg');



//ROUTES
users.post('/', db.createUser,( req, res )=>{
  res.redirect('/');
});

users.get('/new', ( req, res )=> {
  res.render('pages/new.html.ejs');
});

users.get('/login', ( req, res )=> {
  res.render('pages/login.html.ejs');
});

users.post('/login', db.loginUser, ( req, res )=>{
  req.session.user = res.rows;
  req.session.save(function(){
    res.redirect('/');
  });
});

users.delete('/logout', (req,res) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

module.exports = users;
