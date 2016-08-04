(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('DisplayBooksController', DisplayBooksController);

  DisplayBooksController.$inject = ['DataService', 'AuthService'];

  function DisplayBooksController(DataService, AuthService) {

    var vm = this;

    vm.books = [];
    vm.shig = [];
    vm.createBookObj = createBookObj;
    vm.deleteBook = deleteBook;
    vm.getUserBooks = getUserBooks;
    //vm.owner = AuthService.username;
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
        description : "No description. Write one.",
        owner: AuthService.currentUser().email
      };

      console.log(bookObj);
      //console.log(vm.books);
      //console.log(vm.shig);

      vm.books.push(bookObj);
      DataService.saveBook(bookObj);

    }


    function deleteBook(book) {

      DataService.deleteBook(book)
        .then(function() {
          vm.books.splice(book, 1);
        });

    }


    //Implement functionality to be specific to the logged in user.
    //Using the usernames object, generate an array of objects representing the users books.
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


    //Searches for a book by title by making a call to the open library api.
    function searchBook(book) {

      console.log(book);
      DataService.getBook(book)

        .success(function(data) {
          createBookObj(data);
        })

        .error(function(err) {
          console.log(err);
        });

    }


  }

})();
