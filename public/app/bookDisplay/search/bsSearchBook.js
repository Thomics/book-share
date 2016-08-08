'use strict';

/**
 * Creates the display form for searching for a book.
 * @directive
 **/


angular.module('bookApp')
  .directive('bsSearchBook', function(){
    return {
      templateUrl: 'app/bookDisplay/search/bsSearchBook.html',
      controller: 'DisplayBooksController',
      controllerAs: 'display'
    };
  });
