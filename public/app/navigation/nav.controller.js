(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  NavController.$inject = ['$location'];

  function NavController($location) {

    var vm = this;

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
