(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('ChatController', ChatController);

  ChatController.$inject = [];

  function ChatController() {

    var vm = this;


    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });


    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });



  }

})();
