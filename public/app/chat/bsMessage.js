'use strict';

/**
 * Displays the chat message.
 * @display
 **/

angular.module('bookApp')
  .directive('bsMessage', function(){
    var a = 'word';
    return {
      templateUrl: 'app/chat/bsMessage.html',
      replace: true,
      scope: {
        'chatMessage': '='
      },
      controller: 'ChatController',
      controllerAs: 'message',
      transclude: true
    };

  });
