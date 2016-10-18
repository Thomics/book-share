'use strict';

//http routing framework
var express = require('express');
//Parses the incoming request bodies before my handlers.
var parser = require('body-parser');
//Normalizes the path, removes slashes, and periods, and gives the path.
var path = require('path');
//Authentication of requests,
var passport = require('passport');


//Gets the database model file. Contains the connection to the database, and mongoose.
//In this file, books.js is required which gives a model.
require('./server/models/database');
//Authentication.
require('./server/config/passport');



//API routes, gets the route file with all routing.
var router = require('./server/routes/index');
var chatRouter = require('./server/routes/chatRouter');


//Express app
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Connects the socket io.
io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    console.log(msg);
    //io.emit('chat message', msg)//working
    io.emit('new message', msg);//test
  });
});



//Sets the local host to 3000, or if it is on heroku sets it to process.env.PORT
var port = process.env.PORT || 3000;

//Uses the body parser's json middleware parser, to parse incoming requests before the handlers.
app.use(parser.json());

//Sets the default path the be the public folder.
app.use(express.static(path.join(__dirname, '/public')));

//Required middleware to initialize passport.
app.use(passport.initialize());

//If the route is prefixed with api, serve up ./server/routes/index.
app.use('/api', router);
//Sets the chat route.
app.use('/chat', chatRouter);

//Default path, will return index.html for all paths that aren't prefixed with an /api.
app.all('*', function(req, res) {
  console.log(req.body);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Server will listen to the port (either 3000, or on Heroku, process.env.PORT)
server.listen(port, function(){
  console.log('Server on port:' + port);
});


//**************
//Error handlers
//**************

//Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//[SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({'message' : err.name + ': ' + err.message});
  }
});


//Development error handler
//Will print stacktrace
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
//No stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//*******************
//End Error handlers
//*******************

module.exports = app;
