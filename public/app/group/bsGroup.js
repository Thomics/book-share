'use strict';

/**
 * Displays the navigation.
 * @display
 **/

angular.module('bookApp')
  .directive('bsGroup', function(){
    return {
      templateUrl: 'app/group/bsGroup.html',
      replace: true,
      controller: 'GroupController'
    };
  });
