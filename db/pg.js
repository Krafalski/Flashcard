var pg = require('pg');

if (process.env.NODE_ENV  === 'production'){
  var connectionString = process.env.DATABASE_URL;
} else {
var connectionString ='postgres://karolinrafalski:' + process.env.DB_PASSWORD + '@localhost/flashcards';
}

var session = require('express-session');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

function loginUser (req, res, next){
  var email = req.body.email;
  var password = req.body.password;

  pg.connect(connectionString, function (err,client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query("SELECT * FROM users WHERE email LIKE ($1);", [email], function(err, results) {
      done();
      if (err) {
        return console.error('error running query', err);
      }

      if (results.rows.length === 0) {
        res.status(204).json({success: true, data: 'no content'});
      } else if (bcrypt.compareSync(password, results.rows[0].password_digest)) {
        res.rows = results.rows[0];
        next();
      }
    });
  });
}

function createSecure(email, password, callback) {
  // hashing the password given by the user at signup
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      // this callback saves the user to our database
      // with the hashed password

      // saveUser(email, hashed)
      callback(email, hash);
    });
  });
}


function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      var query = client.query("INSERT INTO users( email, password_digest) VALUES ($1, $2);", [email, hash], function(err, result) {
        done();
        if (err) {
          return console.error('error running query', err);
        }
        next();
      });
    });
  }
}


function addCards (req, res, next){
  pg.connect(connectionString, function (err, client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:False, data:err});
    }
    var query = client.query('INSERT INTO cards (side_one, side_two) VALUES ($1,$2)',[req.body.side_one, req.body.side_two], function (err, result){
      done();
      if (err){
        return console.error('error running query', err);
      }
      res.cards = result.rows;
      console.log(query);
      next();
    });
  });
}

//works shows all cards
function showCards (req, res, next){
  pg.connect(connectionString, function (err, client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('SELECT * FROM cards ORDER BY id', function (err, result){
      done();
    if (err){
      return console.error('error running query', err);
     }
     res.cards = result.rows;
    //  console.log('this is res.cards' ,res.cards)
     next();
    });
  });
}

//does not work- trying to fix it- should be called with .get('/cards/:id')
function showCard (req, res, next){
  console.log('showCard being called');
  pg.connect(connectionString, function (err, client, done){
    //console.log(client)
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('SELECT * FROM cards WHERE id=$1',[req.params.id], function (err, result){
      console.log('this is result' , result.rows[0].side_one);
      done();
    if (err){
      return console.error('error running query', err);
     }
     res.cards = result.rows[0];

     next();
    });
  });
}

function updateCards (req, res, next) {
  pg.connect(connectionString, function (err, client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var data= {side_one: req.body.side_one, side_two: req.body.side_two};
    var query = client.query('UPDATE cards SET side_one=$1, side_two=$2 WHERE id=$3', [req.body.side_one, req.body.side_two, req.params.id],(err,results)=>{
      done();
      if (err){
        return console.error('error running query', err);
       }
       next();
    });
  });
}

function deleteCards (req,res,next) {
  pg.connect(connectionString, function (err, client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('DELETE FROM cards WHERE id = $1', [req.params.id],(err,results)=>{
      console.log (req);
      done();
      if (err){
        return console.error('error running query', err);
       }
       next();
    });
  });
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.showCards = showCards;
module.exports.showCard = showCard;
module.exports.addCards = addCards;
module.exports.deleteCards = deleteCards;
module.exports.updateCards = updateCards;
