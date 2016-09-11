'use strict';

/**
 * Displays the navigation.
 * @directive
 **/

angular.module('bookApp')
  .directive('bsGroup', function(){
    return {
      templateUrl: 'app/group/bsGroup.html',
      replace: true,
      controller: 'GroupController'
    };
  });
