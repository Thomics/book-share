'use strict';

angular.module('bookApp')
  .directive('bsNavigation', function(){
    return {
      templateUrl: 'templates/bsNavigation.html',
      replace: true,
      controller: 'NavController'
    }
});
