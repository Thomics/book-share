'use strict';

angular.module('bookApp')
  .directive('bsDisplayBooks', function(){
    return {
      templateUrl: 'app/bookDisplay/bsDisplayBooks.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    }
  });
