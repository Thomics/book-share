'use strict';

/**
 * Displays the registration page.
 * @display
 **/

angular.module('bookApp')
  .directive('bsRegister', function(){
    return {
      templateUrl: 'app/authorization/register/register.view.html',
      replace: true,
      controller: 'RegisterController'
    };
  });
