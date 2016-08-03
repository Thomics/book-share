'use strict';

var console = require('console');
var express = require('express');
var parser = require('body-parser');
var path = require('path');
var passport = require('passport');


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

app.listen(port, function() {
  console.log('Server on port:' + port);
});




//Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

//Development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//Production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
