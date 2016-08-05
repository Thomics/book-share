(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  NavController.$inject = ['$location', 'AuthService'];

  function NavController($location, AuthService) {

    var vm = this;

    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.navigateHome = navigateHome;
    vm.navigateBooks = navigateBooks;
    vm.tab = 1;

    function navigateHome() {
      $location.url('/');
    }

    function navigateBooks() {
      $location.url('/displayBooks');
    }

  }

})();
