(function() {
  'use strict';
  
  angular
    .module('bookApp')
    .controller('NumBooksController', NumBooksController);
  
  NumBooksController.$inject = ['DataService'];
  
  function NumBooksController(DataService) {

    var vm = this;

    vm.addedThisMonth = addedThisMonth;
    vm.booksThisMonth = 0;
    vm.booksInGroup = booksInGroup;
    vm.getAllBooks = getAllBooks;
    vm.getUserBooks = getUserBooks;
    vm.totalBooks = 0;


    activate();

    /**
     * Runs the controllers functions
     */
    function activate() {

      getUserBooks();
      getAllBooks();

    }


    /**
     * Takes an array of users books, and determines how many books were added this calendar month.
     * @param bookList list of users books
     * @returns {number} Returns the number of books that a user has added to their account this calendar month.
     */
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

    function booksInGroup(bookList) {
      console.log(bookList);
      console.log(bookList.length);
      return bookList.length;
    }


    /**
     * Retrieves all books from a group from the database.
     */
    function getAllBooks() {

      DataService.getAllBooks()
        .success(function(data) {
          vm.books = data.books || [];
          vm.totalBooks = vm.booksInGroup(vm.books);
        })
        .error(function(err) {
          console.log(err);
        });

    }


    /**
     * Returns all books added by a user from the database.
     */
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


  }


})();
