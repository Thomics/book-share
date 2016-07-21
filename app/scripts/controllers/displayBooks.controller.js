(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('DisplayBooksController', DisplayBooksController);

  DisplayBooksController.$inject = ['BookService'];

  function DisplayBooksController(BookService) {

    var vm = this;

    vm.books = [];
    vm.createBookObj = createBookObj;
    vm.deleteBook = deleteBook;
    vm.getUserBooks = getUserBooks;
    vm.searchBook = searchBook;


    activate();

    ///////////////////////////////////////////////////////////////


    function activate() {
      vm.getUserBooks();
    }

    //Using data returned from openlibrary.org, generates an object for an individual book.
    function createBookObj(data) {

      var bookObj = {
        title : data.docs[0].title_suggest,
        isbn : data.docs[0].isbn[0],
        image : "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg",
        reviews : ['No Reviews'],
        description : "No description. Write one."
      };

      vm.books.push(bookObj);
      BookService.saveBooks(vm.books);

    }


    function deleteBook(book) {

      BookService.deleteBook(book)
        .then(function() {
          vm.books.splice(book, 1);
          console.log('book deleted');
        });

    }


    //Implement functionality to be specific to the logged in user.
    //Using the usernames object, generate an array of objects representing the users books.
    function getUserBooks() {
      BookService.getUserBooks()
        .success(function(data) {
          vm.books = data.books;
        })
        .error(function(err) {
          console.log(err);
        });
    }


    //Searches for a book by title by making a call to the open library api.
    function searchBook(book) {

      console.log(book);
      BookService.getBook(book)

        .success(function(data) {
          createBookObj(data);
        })

        .error(function(err) {
          console.log(err);
        });

    }


  }

})();
