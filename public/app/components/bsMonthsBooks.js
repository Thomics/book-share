'use strict';

/**
 * Creates the display for component of how many books the user has added this month.
 * @directive
 **/


angular.module('bookApp')
  .directive('bsMonthsBooks', function(){
    return {
      templateUrl: 'app/components/bsMonthsBooks.html',
      controller: 'MonthsBooksController',
      controllerAs: 'monthsBooks'
    };
  });
