'use strict';

/**
 * Creates the display for users books and all books.
 * @directive
 **/


angular.module('bookApp')
  .directive('bsDisplayBooks', function(){
    return {
      templateUrl: 'app/bookDisplay/directive/bsDisplayBooks.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    };
  });
