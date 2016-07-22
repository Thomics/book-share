(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('NavController', NavController);

  function NavController() {

    var vm = this;

    vm.tab = 1;

  }

})();
