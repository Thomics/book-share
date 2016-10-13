'use strict';

/**
 * Displays the chat application.
 * @display
 **/

angular.module('bookApp')
  .directive('bsChat', function(){
    return {
      templateUrl: 'app/chat/bsChat.html',
      replace: true,
      controller: 'ChatController'
    };
  });
