/**
 * Controls the navigation, and navigation routing.
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  NavController.$inject = ['AuthService', '$location'];

  function NavController(AuthService, $location) {

    var vm = this;

    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.tab = 1;
    vm.url = $location.absUrl().split('/').pop();


  }

})();
