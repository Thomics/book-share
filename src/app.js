'use strict';

var express = require('express');
var app = express();
var parser = require('body-parser');
var router = require('./api');

//Sets the port to whatever Heroku is using, and if local to 3000.
var port = process.env.PORT || 3000;

//This requires the database set up in database.js file.
require('./database');

//Tells the program to use the public folder for the homepage, utilizing the index.html.
app.use('/', express.static('public'));

//Tells the program where the application files are.
app.use('/app', express.static('app'));

//Uses node package body-parser to help us post data.
app.use(parser.json());

//Uses the routing set up inside of the api/index.js file.
app.use('/api', router);

//Sets our server up on port 3000.
app.listen(port, function() {
  console.log('Server on port:' + port);
});
