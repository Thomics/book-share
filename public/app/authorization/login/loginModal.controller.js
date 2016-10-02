(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('LoginModalController', LoginModalController);

  LoginModalController.$inject = ['$uibModalInstance'];

  function LoginModalController($uibModalInstance) {

    var vm = this;

    vm.cancel = cancel;
    vm.signedIn = signedIn;

    function signedIn() {
      console.log('ss');
      $uibModalInstance.close('success');
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

  }

})();
