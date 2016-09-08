'use strict';

/**
 * Displays the menu flyout.
 * @directive
 **/

console.log('here');
angular.module('bookApp')
  .directive('bsMenu', function(){
    return {
      templateUrl: 'app/navigation/menu/bsMenu.html',
      controller: 'MenuController',
      controllerAs: 'menu'
    };
  });
