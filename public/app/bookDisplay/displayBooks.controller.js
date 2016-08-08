/**
 * Controls the books
 * @controller
 **/

(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('DisplayBooksController', DisplayBooksController);

  DisplayBooksController.$inject = ['$window', '$location', 'DataService', 'AuthService'];

  function DisplayBooksController($window, $location, DataService, AuthService) {

    var vm = this;

    vm.books = [];
    vm.createBookObj = createBookObj;
    vm.currentPage = $location.path();
    vm.deleteBook = deleteBook;
    vm.getAllBooks = getAllBooks;
    vm.getUserBooks = getUserBooks;
    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.searchBook = searchBook;

console.log(vm.currentPage);
    activate();


    ///////////////////////////////////////////////////////////////


    function activate() {

      if ($window.localStorage['mean-token']) {
        if (vm.currentPage === '/userBooks') {
          vm.getUserBooks();
        }
        if (vm.currentPage === '/allBooks') {
          vm.getAllBooks();
        }
      }
    }

    //Using data returned from openlibrary.org, generates an object for an individual book.
    function createBookObj(data) {

      var bookObj = {
        title : data.docs[0].title_suggest,
        isbn : data.docs[0].isbn[0],
        image : 'http://covers.openlibrary.org/b/isbn/' + data.docs[0].isbn[0] + '-M.jpg',
        reviews : ['No Reviews'],
        description : 'No description. Write one.',
        owner: AuthService.getUsername()
      };

      vm.books.push(bookObj);
      DataService.saveBook(bookObj);

    }


    function deleteBook(book) {

      DataService.deleteBook(book)
        .then(function() {
          vm.books.splice(book, 1);
        });

    }


    function getAllBooks() {

      DataService.getAllBooks()
        .success(function(data) {
          vm.books = data.books || [];
          console.log(vm.books);
        })
        .error(function(err) {
          console.log(err);
        });

    }


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
