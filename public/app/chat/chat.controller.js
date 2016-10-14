(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('ChatController', ChatController);

  ChatController.$inject = ['$scope', 'AuthService'];

  function ChatController($scope, AuthService) {

    var vm = this;

    vm.userEmail = AuthService.getUsername();
    vm.userName = AuthService.getName();
    vm.socket = io();
    vm.checkSubmit = checkSubmit;
    vm.submitMessage = submitMessage;



    function checkSubmit($event) {
      if ( $event.key === 'Enter' ) {

        vm.submitMessage();
      }
    }


    function submitMessage() {
      vm.socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    }



    vm.socket.on('chat message', function(msg){
      $('.message-container').append($('<div>').text(msg));
    });



  }

})();
