(function() {
  'use strict';
  
  angular
    .module('bookApp')
    .controller('MonthsBooksController', MonthsBooksController);
  
  MonthsBooksController.$inject = ['DataService'];
  
  function MonthsBooksController(DataService) {

    var vm = this;

    vm.getUserBooks = getUserBooks;


    function getUserBooks() {

      DataService.getUserBooks()
        .success(function(data) {
          vm.books = data.books || [];
          console.log(vm.books);
        })
        .error(function(err) {
          console.log(err);
        });

    }



  }

})();
