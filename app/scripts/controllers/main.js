'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, $http, BookService ) {

    $scope.books = [];

    getUserBooks();


    //Using the usernames object, generate an array of objects representing the users books.
    function getUserBooks() {
      BookService.getUserBooks()
        .success(function(data) {
          console.log(data.books);
          $scope.books = data.books;
        })
        .error(function(err) {
          console.log(err);
        });
    }



    //Searches for a book by title by making a call to the open library api.
    $scope.searchBook = function(book) {

      BookService.getBook(book)
        .success(function(data) {
          createBookObj(data);
        })
        .error(function(err) {
          console.log(err);
        });

    };


    //Using data returned from openlibrary.org, generates an object for an individual book.
    function createBookObj(data) {

      var bookObj = {
        title : data.docs[0].title_suggest,
        isbn : data.docs[0].isbn[0],
        image : "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg",
        reviews : [{}],
        description : "No description. Write one."
      };

      $scope.books.push(bookObj);
      BookService.saveBooks($scope.books);

    }



    $scope.saveBooks = function() {
      //var filteredTodos = $scope.books.filter(function(book){
      //  if(book.edited) {
      //    return book
      //  };
      //});
      BookService.saveBooks($scope.books);
        //.finally($scope.resetBookState());
    };


    //$scope.restBookState = function() {
    //  $scope.books.forEach(function(book) {
    //    book.edited = false;
    //  });
    //}







  });
