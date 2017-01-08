//IIFE
(function() {
  'use strict';
}());


var express       = require('express');
var cards         = express.Router();
var bodyParser    = require('body-parser');
var session       = require ('express-session');
var db            = require ('./../db/pg');

//need to move everything in /cards so that there is log-in functionality


// cards.use(function(req, res, next){
//   console.log(req.session);
//   //if user exists, allow next part to go through, else send 401`
//   if (req.session.user){
//     next();
//   } else {
//     res.status(401).json( {success: false, data:'not logged in'});
//   }
// });

//moved from server.js
cards.get('/', function (req, res){
  res.render ('pages/options.ejs',{
  });
});

cards.get('/list', db.showCards, function(req, res){
  console.log('getting my list!');
  res.render ('pages/cards.ejs', {
    cards: res.cards
  });
});

cards.get('/new', function (req, res){
  res.render ('pages/cards_new.ejs',{
  });
});

cards.post('/new', db.addCards, function(req,res) {
  res.redirect('/cards/list');
});

cards.get('/study', (req, res)=>{
  res.render ('pages/study.ejs',{
  });
});

////above was moved from server.js and works
/// below was moved from server.js and does not work

// cards.get('/cards/:id', db.showCards, function (req,res){
//   var id = req.params.id-1;
//   console.log('this is id ' ,id, req.params.id);
//   res.render ('pages/cards_one.ejs', {
//     cards: res.cards[id],
//
//   });
// });

//testing out above to maybe replace this which is wonky
//does not work if a card has been deleted and a card after
//the deleted card is clicked on
//this is showing one card
cards.get('/:id', db.showCard, function (req,res){
  console.log('in this one /:id');
  var id = req.params.id;
  console.log('this the id in this one' , res.cards);
  res.render ('pages/cards_one.ejs', {cards: res.cards});
});

cards.put ('/cards/:id', db.updateCards, function(req, res){
  res.redirect('/cards/list');
});

cards.delete('/cards/:id', db.deleteCards, function (req,res){
  res.redirect('/cards/list');
});

module.exports = cards;
