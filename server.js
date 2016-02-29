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

if (process.env.NODE_ENV === 'production'){
  var connectionString = process.env.DATABASE_URL;
} else {
var connectionString ='postgres://karolinrafalski:' + process.env.DB_PASSWORD + '@localhost/flashcards';
}

var app               = express();

var userRoutes = require( path.join(__dirname, '/routes/users'));
var cardsRoutes = require( path.join(__dirname, '/routes/cards'));

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

var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);

app.use(session({
  store: new pgSession({
    pg : pg,
    conString : connectionString,
    tableName : 'session'
  }),
  secret: 'sooosecrett', // look into changing/savig with dotenv.
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

app.use('/users', userRoutes);

app.get('/', function(req,res){
  res.render('pages/home.ejs', {
    howdy:howdy,
    user: req.session.user
  });
});


app.use('/cards', cardsRoutes);

//temporary for testing db connectivity
// app.get('/cards', function (req, res){
//   res.render ('pages/options.ejs',{
//   });
// });

// app.get('/cards/list', db.showCards, function(req, res){
//   res.render ('pages/cards.ejs', {
//     cards: res.cards,
//   });
// });

app.get('/signup', (req,res)=>{
  res.send ('show sign up page, eventually');
});

app.get('/logout', (req, res)=>{
  res.render ('pages/logout.ejs',{
  });
});

//need to move everything /cards to cards.js so that thre is log-in functionality - show the cards to the user, show no cards to someone who is not logged in, have user make cards and see their cards and edit/delete their cards

//below was moved to cards.js and works

// app.get('/cards/new', function (req, res){
//   res.render ('pages/cards_new.ejs',{
//   });
// });

// app.post('/cards/new', db.addCards, function(req,res) {
//   res.redirect('/cards/list');
// });

// app.get('/cards/study', (req, res)=>{
//   res.render ('pages/study.ejs',{
//   });
// });

//above was moved to cards.js and works


//new code new function db.showCard
//function db.showCard seems to have an error?
// app.get('/cards/:id', db.showCards, function (req, res){
//   res.render('pages/cards_one.ejs', {
//     cards: res.cards[0]
//   });
// });

//testing out above to maybe replace this which is wonky
//does not work if a card has been deleted and a card after
//the deleted card is clicked on
app.get('/cards/:id', db.showCards, function (req,res){
  var id = req.params.id-1;
  console.log(id);
  res.render ('pages/cards_one.ejs', {
    cards: res.cards[id],
  });
});

app.put ('/cards/:id', db.updateCards, function(req, res){
  res.redirect('/cards/list');
});

app.delete('/cards/:id', db.deleteCards, function (req,res){
  res.redirect('/cards/list');
});


app.get('/cards/:id/edit', db.showCards, (req, res)=>{
  res.render ('pages/cards_one.ejs', res.rows);
});









var port = process.env.PORT || 3000;
var server = app.listen(port, () =>
  console.log ('Flash! ', port, '//', new Date()));
