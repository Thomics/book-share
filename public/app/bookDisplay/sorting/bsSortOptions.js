'use strict';

/**
 * Displays the sorting options.
 * @display
 **/

angular.module('bookApp')
  .directive('bsSortOptions', function(){
    return {
      templateUrl: 'app/bookDisplay/sorting/bsSortOptions.html',
      //replace: true,
      controller: 'SortOptionsController',
      controllerAs: 'sort'
    };
  });
