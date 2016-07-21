'use strict';

angular.module('bookApp')
  .directive('bsDisplayBooks', function(){
    return {
      templateUrl: 'templates/bsDisplayBooks.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    }
  });
