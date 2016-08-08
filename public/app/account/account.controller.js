/**
 * Controls the users account.
 * @controller
**/

(function() {
  /* jshint strict: true */
  'use strict';

  angular
    .module('bookApp')
    .controller('AccountController', AccountController);
  
  AccountController.$inject = ['$window', '$location', 'DataService', 'AuthService'];
  
  function AccountController(AuthService) {

    var vm = this;

    vm.currentUser = AuthService.currentUser()

    vm.accountName = vm.currentUser.name;
    vm.userName = vm.currentUser.email;


    activate();


    ///////////////////////////////////////////////////////////////


    function activate() {

    }

  }
  
})();
