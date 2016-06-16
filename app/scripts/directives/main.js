'use strict';

angular.module('bookApp')
  .directive('main', function(){
    return {
      templateUrl: 'templates/main.html',
      replace: true,
      controller: 'mainCtrl'
    }
  });