'use strict';

/**
 * Creates the display for component of how many books the user has added this month.
 * @directive
 **/


angular.module('bookApp')
  .directive('bsMonthlyBooks', function(){
    return {
      templateUrl: 'app/components/bsMonthlyBooks.html',
      controller: 'NumBooksController',
      controllerAs: 'monthlyBooks'
    };
  });
