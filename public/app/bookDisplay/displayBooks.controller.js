(function() {
  'use strict';

  angular
    .module('bookApp')
    .controller('DisplayBooksController', DisplayBooksController);

  DisplayBooksController.$inject = ['$window', '$location', '$uibModal', 'DataService', 'AuthService'];

  function DisplayBooksController($window, $location, $uibModal, DataService, AuthService) {

    var vm = this;

    vm.books = [];
    vm.createBook = createBook;
    vm.createModal = createModal;
    vm.currentPage = $location.path();
    vm.deleteBook = deleteBook;
    vm.getAllBooks = getAllBooks;
    vm.getUserBooks = getUserBooks;
    vm.isLoggedIn = AuthService.isLoggedIn();
    vm.searchBook = searchBook;

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
    function createBook(bookData) {

      var bookObj = {
        title : bookData.title_suggest,
        isbn : bookData.isbn[0],
        image : 'http://covers.openlibrary.org/b/isbn/' + bookData.isbn[0] + "-M.jpg",
        author : bookData.author_name[0],
        reviews : ['No Reviews'],
        description : "No description. Write one.",
        dateAdded: new Date(),
        owner: AuthService.getUsername()
      };

      vm.books.push(bookObj);
      DataService.saveBook(bookObj);

    }


    function createModal(data) {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/bookDisplay/bookModal.html',
        controller: 'BookModalController',
        controllerAs: 'modal',
        resolve: {
          data: function () {
            return data.docs;
          }
        }
      });

      modalInstance.result
        .then(function (selectedBook) {
          createBook(selectedBook);
        }, function () {

          console.log('leave');
        });

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

      DataService.getBook(book)

        .success(function(data) {

          vm.createModal(data);

        })

        .error(function(err) {
          console.log(err);
        });

    }


  }

})();
