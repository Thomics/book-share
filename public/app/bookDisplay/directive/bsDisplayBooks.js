'use strict';

angular.module('bookApp')
  .directive('bsDisplayBooks', function(){
    return {
      templateUrl: 'app/bookDisplay/directive/bsDisplayBooks.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    }
  });
