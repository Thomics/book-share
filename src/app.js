'use strict';

var express = require('express');
var app = express();
var router = require('./api');

//This requires the database set up in database.js file.
require('./database');

//Uses the routing set up inside of the api/index.js file.
app.use('/api', router);

//Tells the program to use the public folder for the homepage, utilizing the index.html.
app.use('/', express.static('public'));

//Tells the program where the application files are.
app.use('/app', express.static('app'));

//Sets our server up on port 3000.
app.listen(3000, function() {
  console.log('Server on port 3000');
});