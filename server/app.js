'use strict';

var express = require('express');
var parser = require('body-parser');
var path = require('path');
var passport = require('passport');

var console = require('console');



require('./models/database');
require('./config/passport');

//API routes
var router = require('./routes/index');

//Express app
var app = express();

var port = process.env.PORT || 3000;

app.use(parser.json());
app.use('/', express.static('public'));
app.use(passport.initialize());
app.use('/api', router);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/../public', 'index.html'), function(err) {
    console.log(err);
  });
});


app.listen(port, function() {
  console.log('Server on port:' + port);
});


//Catch unauthorized errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

module.exports = app;

