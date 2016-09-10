'use strict';

/**
 * Creates the display for component of how many books the user has added this month.
 * @directive
 **/


angular.module('bookApp')
  .directive('bsNumUsers', function(){
    return {
      templateUrl: 'app/components/monthly-books/bsMonthlyBooks.html',
      controller: 'ComponentsController',
      controllerAs: 'numUsers'
    };
  });
