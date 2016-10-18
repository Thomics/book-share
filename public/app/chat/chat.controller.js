(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('ChatController', ChatController);

  ChatController.$inject = ['$scope', '$compile', 'AuthService'];

  function ChatController($scope, $compile,  AuthService) {

    var vm = this;

    vm.userEmail = AuthService.getUsername();
    vm.userName = AuthService.getName();
    vm.socket = io();
    vm.checkSubmit = checkSubmit;
    vm.submitMessage = submitMessage;
    vm.time = new Date();


    function checkSubmit($event) {
      if ( $event.key === 'Enter' ) {
        vm.submitMessage();
      }
    }


    function submitMessage() {
      vm.socket.emit('chat message', vm.chatMessage);
      vm.chatMessage = '';
      return false;
    }


    vm.socket.on('new message', function(msg){
      $('.message-container').append($compile('<bs-message>' + msg + '</bs-message>')($scope));
      vm.socket.removeAllListeners('new message');
    });


  }

})();
