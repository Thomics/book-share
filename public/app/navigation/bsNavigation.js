'use strict';

/**
 * Displays the navigation.
 * @display
 **/

angular.module('bookApp')
  .directive('bsNavigation', function(){
    return {
      templateUrl: 'app/navigation/bsNavigation.html',
      replace: true,
      controller: 'NavController'
    };
});
