(function() {
  'use strict';
  
  angular
    .module('bookApp')
    .controller('MonthsBooksController', MonthsBooksController);
  
  MonthsBooksController.$inject = ['DataService'];
  
  function MonthsBooksController(DataService) {

    var vm = this;

    vm.addedThisMonth = addedThisMonth;
    vm.booksThisMonth = 0;
    vm.getUserBooks = getUserBooks;


    activate();


    function activate() {

      getUserBooks();

    }

    function getUserBooks() {

      DataService.getUserBooks()
        .success(function(data) {
          vm.books = data.books || [];
          vm.booksThisMonth = vm.addedThisMonth(vm.books);
        })
        .error(function(err) {
          console.log(err);
        });

    }


    function addedThisMonth(bookList) {

      var currentMonth = new Date().getMonth(),
          booksAdded = 0;

      for (var i = 0; i < bookList.length; i++ ) {

        var bookAddedMonth = new Date(bookList[0].dateAdded).getMonth();

        if ( currentMonth === bookAddedMonth ) {
          booksAdded++;
        }

      }

      return booksAdded;

    }


  }


})();
