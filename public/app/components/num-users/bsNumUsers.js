'use strict';

/**
 * Creates the display for component of how many books the user has added this month.
 * @display
 **/


angular.module('bookApp')
  .directive('bsNumUsers', function(){
    return {
      templateUrl: 'app/components/num-users/bsNumUsers.html',
      controller: 'ComponentsController',
      controllerAs: 'numUsers'
    };
  });
