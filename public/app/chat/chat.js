//var app = require('express')();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);
//
//console.log('here');
//
////Sets up the route for the user chat.
//app.get('/chat', function(req, res) {
//  console.log('hire');
//  console.log(path.join(__dirname, 'public', 'app', 'chat', 'bsChat.html'));
//  res.sendFile(path.join(__dirname, 'public', 'app', 'chat', 'bsChat.html'));
//});
//
//io.on('connection', function(socket){
//  socket.on('chat message', function(msg){
//    io.emit('chat message', msg);
//  });
//});


var socket = io();
console.log('wha0');

$('form').submit(function(){

  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){

  $('#messages').append($('<li>').text(msg));
});

console.log('he');
