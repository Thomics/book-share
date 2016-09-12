'use strict';

/**
 * Creates the display for component of how many books the group has total.
 * @display
 **/


angular.module('bookApp')
  .directive('bsTotalBooks', function(){
    return {
      templateUrl: 'app/components/total-books/bsTotalBooks.html',
      controller: 'ComponentsController',
      controllerAs: 'totalBooks'
    };
  });
