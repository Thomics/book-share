'use strict';

/**
 * Creates the display for users books and all books.
 * @display
 **/


angular.module('bookApp')
  .directive('bsDisplayBooks', function(){
    return {
      templateUrl: 'app/bookDisplay/display/bsDisplayBooks.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    };
  });
