/**
 * Controls the navigation, and navigation routing.
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  NavController.$inject = ['AuthService'];

  function NavController(AuthService) {

    var vm = this;

    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.tab = 1;

  }

})();
