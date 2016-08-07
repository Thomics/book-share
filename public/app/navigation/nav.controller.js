(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  NavController.$inject = ['$location', 'AuthService'];

  function NavController($location, AuthService) {

    var vm = this;

    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.navigateAllBooks = navigateAllBooks;
    vm.navigateHome = navigateHome;
    vm.navigateUserBooks = navigateUserBooks;
    vm.tab = 1;

    function navigateHome() {
      $location.url('/');
    }

    function navigateUserBooks() {
      $location.url('/userBooks');
    }

    function navigateAllBooks() {
      $location.url('/allBooks');
    }

  }

})();
