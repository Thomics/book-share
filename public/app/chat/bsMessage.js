'use strict';

/**
 * Displays the chat message.
 * @display
 **/

angular.module('bookApp')
  .directive('bsMessage', function(){
    return {
      //templateUrl: 'app/chat/bsMessage.html',
      template: '<div>{{chatMessage}}</div>',
      replace: true,
      scope: {
        'chatMessage': '='
      },
      controller: 'ChatController',
      controllerAs: 'message',
      link: function(scope, element, attrs) {
        console.log(scope);
        console.log(scope.message.chatMessage);
        console.log(element);
        console.log(attrs);
        //console.log(scope.chatMessage);
      }

    };
  });
