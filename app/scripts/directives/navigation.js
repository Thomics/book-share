'use strict';

angular.module('bookApp')
  .directive('navigation', function(){
    return {
      templateUrl: 'templates/navigation.html',
      replace: true,
      controller: 'navigationCtrl'
    }
});
