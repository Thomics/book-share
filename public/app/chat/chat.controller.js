(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('ChatController', ChatController);

  ChatController.$inject = ['$scope', '$compile', 'AuthService'];

  function ChatController($scope, $compile,  AuthService) {

    var vm = this;

    vm.logMessage = logMessage;
    vm.userEmail = AuthService.getUsername();
    vm.userName = AuthService.getName();
    vm.socket = io();
    vm.checkSubmit = checkSubmit;
    vm.submitMessage = submitMessage;
    vm.time = getTime();
    vm.chatMessage;


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


    function submitMessage() {
      vm.socket.emit('chat message', $('#m').val());
      vm.chatMessage = $('#m').val();
      vm.logMessage();
      $('#m').val('');
      return vm.chatMessage;
      //return false;
    }

    function logMessage() {
      console.log('emit');
      vm.socket.on('chat message', function(msg){
        //$('.message-container').append($('<div>').text(msg));
        console.log(vm.chatMessage);

        $('.message-container').append($compile('<bs-message chatMessage=vm.chatMessage></bs-message>')($scope));

      });
    }


    //vm.socket.on('chat message', function(msg){
    //  //$('.message-container').append($('<div>').text(msg));
    //
    //  $('.message-container').append($compile('<bs-message>')($scope));
    //
    //});



  }

})();
