(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('SearchBookController', SearchBookController);

  SearchBookController.$inject = ['ModalService'];

  function SearchBookController(ModalService) {

    var vm = this;

    vm.modalActive = false;
    vm.searchModal = searchModal;


    function searchModal() {

      console.log('here');
      vm.modalActive = true;
      ModalService.showModal({
        templateUrl: "app/bookDisplay/search/bsSearchModal.html",
        controller: "SearchBookController"
      }).then(function(modal) {
        modal.close.then(function(data) {
          console.log('in the then');
        });
      });

    }

  }

})();
