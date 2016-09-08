/**
 * Controls the navigation, and navigation routing.
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  NavController.$inject = ['$location', 'AuthService'];

  function NavController($location, AuthService) {

    var vm = this;

    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.navigateAccount = navigateAccount;
    vm.navigateAllBooks = navigateAllBooks;
    vm.navigateGroups = navigateGroups;
    vm.navigateHome = navigateHome;
    vm.navigateUserBooks = navigateUserBooks;
    vm.tab = 1;


    function navigateAccount() {
      $location.url('/account');
    }

    function navigateGroups() {
      $location.url('/groups');
    }

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
