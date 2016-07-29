'use strict';

var express = require('express');
var parser = require('body-parser');
var passport = require('passport');



require('./models/database');
require('./config/passport');

//API routes
var router = require('./routes/index');

//Express app
var app = express();

var port = process.env.PORT || 3000;


app.use('/', express.static('public'));

app.use(parser.json());

//new
require('./models/database');
require('./config/passport');
app.use(passport.initialize());
//end new


app.use('/api', router);


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