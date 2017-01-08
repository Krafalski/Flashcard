//IFFE
(function() {
  'use strict';

}());

// DEPENDENCIES
var bodyParser        = require( 'body-parser' );
var db                = require( './db/pg' );
var dotenv            = require ( 'dotenv' );
var express           = require( 'express' );
var methodOverride    = require ( 'method-override' );
var morgan            = require( 'morgan' );
var path              = require ( 'path' );
var pg                = require( 'pg' );
var pgSession         = require( 'connect-pg-simple' );
var session           = require( 'express-session' );

//ENVIRONMENT VARIABLES
if ( process.env.NODE_ENV === 'production' ){
  var connectionString = process.env.DATABASE_URL;
} else {
var connectionString ='postgres://karolinrafalski:' + process.env.DB_PASSWORD + '@localhost/flashcards';
}

var app               = express();

//MIDDLEWARE
dotenv.load();
app.use( express.static( './public/' ));

app.use( bodyParser.urlencoded( { extended:false } ));
app.use( bodyParser.json());

app.use( methodOverride( '_method' ));

app.use( express.static( path.join( __dirname, 'public')));

app.use (morgan( 'short' ));

app.set ('view engine', 'ejs');

var stub = (req, res)=> res.send( req.method + ' method called. But functionality not added yet');

//ROUTES
var userRoutes = require( path.join( __dirname, '/routes/users'));
var cardsRoutes = require( path.join( __dirname, '/routes/cards'));

//SESSIONS
var session = require( 'express-session' );
var pgSession = require( 'connect-pg-simple' )(session);

app.use( session({
    resave: false,
    saveUninitialized: true,
    store: new pgSession({
    pg : pg,
    conString : connectionString,
    tableName : 'session',
  }),
  secret: 'sooosecrett', // look into changing/saving with dotenv.
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));


//ROUTES
app.use( '/users' , userRoutes );

app.get( '/' , ( req, res ) => {
  res.render('pages/home.ejs', {
    user: req.session.user
  });
});

app.use('/cards', cardsRoutes);

app.get('/signup', (req,res)=>{
  res.send ('show sign up page, eventually');
});

app.get('/logout', (req, res)=>{
  res.render ('pages/logout.ejs',{
  });
});


//SERVER
var port = process.env.PORT || 3000;
var server = app.listen(port, () =>
  console.log ('Flash! ', port, '//', new Date()));
