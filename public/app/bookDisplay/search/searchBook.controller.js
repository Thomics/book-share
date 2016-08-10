(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('SearchBookController', SearchBookController);

  SearchBookController.$inject = ['ModalService'];

  function SearchBookController(ModalService) {

    var vm = this;

    vm.searchModal = searchModal;


    function searchModal() {

      console.log('here');
      ModalService.showModal({
        templateUrl: "app/bookDisplay/search/bsSearchModal.html",
        controller: "SearchBookController"
      }).then(function(modal) {
        modal.close.then(function(data) {
          vm.result = "All good!";
        });
      });

    }

  }

})();
