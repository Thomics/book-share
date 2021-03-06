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
    vm.reloadRoute = DataService.reloadRoute;
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
        if (vm.currentPage === '/group') {
          console.log('group');
          vm.getAllBooks();
        }
      }
    }

    ////Gets the height of the book cover image. If there is no image, Open Library will return a 1px by 1px image.
    //function checkBookCover(image) {
    //  var img = new Image();
    //  img.src = image;
    //  img.onload = function() {
    //    console.log(this.naturalHeight);
    //
    //    return this.naturalHeight;
    //  };
    //
    //
    //}

    
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
        owner: AuthService.getUsername(),
        ownerName: AuthService.currentUser().name
      };

      //if ( vm.checkBookCover(bookObj.image) ) {
      //  console.log('image here');
      //
      //  bookObj.image = '../img/cover-404.jpg';
      //}

      vm.books.push(bookObj);
      DataService.saveBook(bookObj);
      vm.reloadRoute();
    }


    function createModal(data) {
      console.log(data.docs);

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/bookDisplay/search-modal/bookModal.html',
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
          vm.createBook(selectedBook);
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
          DataService.books = vm.books;
        })
        .error(function(err) {
          console.log(err);
        });

    }


    function getUserBooks() {

      DataService.getUserBooks()
        .success(function(data) {
          vm.books = data.books || [];
          DataService.books = vm.books;
          DataService.userBooks = vm.books;
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
