(function() {
  /* jshint strict: true */
  'use strict';

  angular
    .module('bookApp')
    .controller('AccountController', AccountController);
  
  AccountController.$inject = ['$window', '$location', 'DataService', 'AuthService'];
  
  function AccountController($window, $location, DataService, AuthService) {

    var vm = this;

    vm.accountName = AuthService.currentUser().name;
    vm.userName = AuthService.currentUser().email;


    activate();


    ///////////////////////////////////////////////////////////////


    function activate() {

    }

  }
  
})();
