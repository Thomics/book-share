(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('BookModalController', BookModalController);

  BookModalController.$inject = ['$uibModal', 'data'];

  function BookModalController($uibModal, data) {

    var vm = this;

    vm.data = data.splice(0, 10);


  }

})();
