(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  function NavController() {

    var vm = this;

    console.log('inside controller');

    vm.tab = 1;

  }

})();
