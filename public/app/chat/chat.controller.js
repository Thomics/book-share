(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('ChatController', ChatController);

  ChatController.$inject = ['$scope', '$compile', 'AuthService'];

  function ChatController($scope, $compile,  AuthService) {

    var vm = this;

    //vm.logMessage = logMessage;
    vm.userEmail = AuthService.getUsername();
    vm.userName = AuthService.getName();
    //Add url
    vm.socket = io();
    //vm.socket = io('http://localhost');
    vm.checkSubmit = checkSubmit;
    vm.submitMessage = submitMessage;
    vm.time = getTime();



    function checkSubmit($event) {
      if ( $event.key === 'Enter' ) {
        vm.submitMessage();
      }
    }


    function getTime() {
      var time = new Date();
      var month = time.getMonth() + 1;
      var day = time.getDay() + 1;
      var year = String(time.getFullYear()).slice(2);
      var hours = Math.abs((time.getHours()) - 12);
      var minutes = time.getMinutes();
      return month + '/' + day + '/' + year + " " + hours + ":" + minutes ;
    }


    //socket.on('chat message', function(msg){
    //  $('#messages').append($('<li>').text(msg));
    //});

    function submitMessage() {
      console.log('times');
      vm.socket.emit('chat message', vm.chatMessage);
      vm.chatMessage = '';
      return false;
    }


    vm.socket.on('new message', function(msg){
      console.log(msg);
      $('.message-container').append($compile('<bs-message>' + msg + '</bs-message>')($scope));
      vm.socket.removeAllListeners('new message');
    });



  }

})();
