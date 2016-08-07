'use strict';

angular.module('bookApp')
  .directive('bsSearchBook', function(){
    return {
      templateUrl: 'app/bookDisplay/search/bsSearchBook.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    };
  });
