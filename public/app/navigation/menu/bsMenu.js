'use strict';

/**
 * Displays the menu flyout.
 * @display
 **/

angular.module('bookApp')
  .directive('bsMenu', function(){
    return {
      templateUrl: 'app/navigation/menu/bsMenu.html',
      controller: 'LoginController',
      controllerAs: 'login'
    };
  });
