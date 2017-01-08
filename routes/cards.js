//IIFE
(function() {
  'use strict';
}());

//DEPENDENCIES
var express       = require ( 'express' );
var cards         = express.Router();
var bodyParser    = require( 'body-parser' );
var session       = require ( 'express-session' );
var db            = require ( './../db/pg' );

// 7 restful routes index, new, create, show, edit, update, & destroy

cards.get( '/' , ( req, res ) => {
  res.render('pages/options.ejs',{
  });
});

//INDEX
cards.get( '/list' , db.showCards, ( req, res )  => {
  res.render( 'pages/cards.ejs', {
    cards: res.cards
  });
});

//NEW
cards.get( '/new' , ( req, res ) => {
  res.render( 'pages/cards_new.ejs' , {
  });
});

//CREATE
cards.post( '/new' , db.addCards , ( req, res ) => {
  res.redirect('/cards/list');
});

// OTHER FEATURE - has to go before dynamic routes
cards.get( '/study' , ( req, res ) => {
  res.render( 'pages/study.ejs' , {
  });
});

//SHOW/EDIT
cards.get( '/:id' ,  db.showCard, ( req, res ) => {
  res.render('pages/cards_one.ejs', {cards: res.cards});
});

//UPDATE
cards.put( '/:id' , db.updateCards, ( req, res ) => {
  res.redirect('/cards/list');
});

//DESTROY
cards.delete( '/:id' , db.deleteCards, ( req, res ) => {
  res.redirect( '/cards/list' );
});

module.exports = cards;
