(function() {
  'use strict';

}());

var express         = require('express');
var users           = express.Router();
var bodyParser      = require('body-parser');
var db              =require ('./../db/pg');

users.post('/', db.createUser,(req, res)=>{
  res.redirect('/');
});

users.get('/new', (req, res)=> {
  res.send('go to here eventually: users/newuser.html.ejs');
});

users.get('/login', (req, res)=> {
  res.send('go to here eventually: users/login.html.ejs');
});

users.post('/login', db.loginUser, (req, res)=>{
  req.session.user = res.rows;
  req.session.save(function(){
    res.redirect('/');
  });
});

users.delete('/logout', (res, req)=> {
  req.session.destroy(function(err){
    res.redirect('/');
  });
});

module.exports = users;
