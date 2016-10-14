'use strict';

/**
 * Displays the chat message.
 * @display
 **/

angular.module('bookApp')
  .directive('bsMessage', function(){
    return {
      templateUrl: 'app/chat/bsMessage.html',
      replace: true,
      controller: 'ChatController',
      controllerAs: 'message'
    };
  });
