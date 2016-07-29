'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();
var router = require('./api/index');
var methodOverride = require('method-override');
var passport = require('passport');

var port = process.env.PORT || 3000;

var routesApi = require('./routes/index');


require('./database');

app.use('/', express.static('public'));

app.use(parser.json());

//new
require('./models/users');
require('./config/passport');
app.use(passport.initialize());
//end new


app.use('/api', router);

// [SH] Use the API routes when path starts with /api
app.use('/api', routesApi);



app.listen(port, function() {
  console.log('Server on port:' + port);
});


// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});