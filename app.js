'use strict';

var express = require('express');
var parser = require('body-parser');
var path = require('path');
var passport = require('passport');

var console = require('console');



require('./server/models/database');
require('./server/config/passport');

//API routes
var router = require('./server/routes/index');

//Express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var port = process.env.PORT || 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use(passport.initialize());

app.use('/api', router);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//app.use( function(req, res) {
//  //console.log(path.join(__dirname, 'server', 'routes', 'index.js'));
//  //res.sendFile(path.join(__dirname, 'public', 'index.html'));
//
//  res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});


app.listen(port, function() {
  console.log('Server on port:' + port);
});

module.exports = app;
