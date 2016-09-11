'use strict';

/**
 * Displays the sorting options.
 * @directive
 **/

angular.module('bookApp')
  .directive('bsSortOptions', function(){
    return {
      templateUrl: 'app/bookDisplay/sorting/bsSortOptions.html',
      replace: true,
      controller: 'SortOptionsController'
    };
  });
