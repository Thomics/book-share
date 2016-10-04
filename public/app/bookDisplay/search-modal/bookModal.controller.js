(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('BookModalController', BookModalController);

  BookModalController.$inject = ['$uibModalInstance', 'data'];

  function BookModalController($uibModalInstance, data) {

    var vm = this;

    vm.bookSelected = bookSelected;
    vm.cancel = cancel;
    vm.data = data.splice(0, 10);
    //vm.selectedBook = {
    //  book: null
    //};
    vm.bookList = [];

    function bookSelected(book) {
      console.log(book);

      $uibModalInstance.close(book);
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }


  }

})();



