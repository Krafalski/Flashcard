### Thursday February 25:
- create ideas- app idea Flashcards ✅
- create ERD  ✅ - this is on draw.io
- create wireframes  ✅
- create user stories  ✅
- create readme.md  ✅
- create this schedule  ✅
- set up git repository  ✅
- add issues ✅
- research issues and do them correctly  ✅
- draw out the paths really well and clearly - do this on draw io? or somewhere else?
- research sql and start sketching out the best way to create the schema.sql and maybe write the seed.sql - just to get a feel for what I am creating/how to access it/what will it 'look' like.
- look at what pg promise is
- look into css frameworks
- create gitignore file and test it out
  https://gist.github.com/octocat/9257657


  in atom type iif+<tab> this will set use strict in an instantly invoked function - as suggested by atom errors/warnings

- npm modules (app = express)

    - bcrypt : npm install - but does not appear explicity in  js files-from classwork, but we did it... must investigate further
    https://www.npmjs.com/package/bcrypt

    var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('B4c0/\/', salt, function(err, hash) {
        // Store hash in your password DB.
    });
});


  - body-parser : to parse the body of a post request
      var bodyParser        = require('body-parser');
      app.use(bodyParser.urlencoded( { extended:false } ));
      app.use(bodyParser.json());



  - dotenv : to set the environment specific to my computer - including things like port and my db password * use git ignore
      var dotenv            = require ('dotenv');
      dotenv.load();

  - ejs : allows for mixing js and html to dynamically render portions of web pages (note var ejs = ... not needed)
      app.set ('view engine', 'ejs');

  - express : web application framework
      var express           = require('express');
      var app                = express();

  - method-override : allows for other verbs beyond get and post (like put and delete) via http
      var methodOverride    = require ('method-override');
      app.use(methodOverride('_method'));

  - morgan: logs information about server in node console/terminal- can use other besides 'short'-check doucmentation
      var morgan            = require('morgan');
      app.use(morgan('short'));

  - path - handles file paths in node
    https://nodejs.org/api/path.html
      var path              = require ('path');

  - pg - postgres module - only needed in pg.js? or server.js?
    var pg                = require('pg');

  - pg session - allows user sessions, needs a table called session in connected database:      https://www.npmjs.com/package/connect-pg-simple
      var pgSession         = require('connect-pg-simple');

  - create session middleware with options
      https://www.npmjs.com/package/express-session
      var session           = require('express-session');

  - pry -allows for code -pause/debugging. NOTE set as global variable by not including var (if 'use strict' interferes, set this variable above 'use strict')
    pry                   = require ('pryjs');

  ##### module further research needed:
   pg (where to put it)
   pg sessions (where and how to use it)
   expresss-session (where and how to use it)
   remember to create the session table in connected database for pg session (see above)
   bcrypt - seem to be missing something from class example

  NOTE: add a checkmark for each module that has been successfully implemented/tested


### Friday February 26:

- make directory  ✅
- put it on git  ✅
- update erd and save it to png - upload it to git?
- add Colin, Peter & Jason as collaborators  ✅
- set up server ✅
- set up database and tables  be sure to add time stamps and dates stuff
- connect the database to the server
- enter some dummy data
- create routes
- get something to display on the routes
- add a little css
- consider ejs today or tomorrow?
- create user and user authentication
- update readme
- update issues
- update this schedule



### Saturday February 27:
- the create route!
- the edit route!
- super awesome goal for the day: delete and update route
- create the nav bar
- do some css
- update readme
- update issues
- update this schedule

### Sunday February 28:
- keep working on everything above and hopefully finish the above
- update readme
- update issues
- update this schedule


### Monday February 29:
hopefully be done and polishing.
See if I can create the study view/portion of the app
- update readme
- update issues
- update this schedule

Code Freeze

### Tuesday March 1:
PRESENTATION DAY
