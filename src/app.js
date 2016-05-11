'use strict';

var express = require('express');
var app = express();
var parser = require('body-parser');
var router = require('./api');
require('./database');

//Uses the routing set up inside of the api/index.js file.
app.use('/api', router);

// Tells the program to use the public folder for the homepage, utilizing the index.html.
app.use('/', express.static('public'));

//Sets our server up on port 3000.
app.listen(3000, function() {
  console.log('Server on port 3000');
});