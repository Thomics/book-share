'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, $http, BookService ) {

    $scope.books = [];

    var retrieveBooks = function( ) {
      $http.get('../mock/user-books.json')
        .success(function(data) {

          var arr = data[0].books;
          console.log(data[0].books);

          for ( var i = 0; i < arr.length; i++ ) {

            BookService.getBooks(arr[i].title)

              .success(function(data) {
                createBookObj(data);
              })

              .error(function(err) {
                console.log(err);
              });
          }
        });

    };

    retrieveBooks();


    $scope.searchBook = function(book) {

      BookService.getBooks(book)

        .success(function(data) {
          createBookObj(data);
        })

        .error(function(err) {
          console.log(err);
        });
    };


    function createBookObj(data) {

      var bookObj = {
        title : data.docs[0].title_suggest,
        isbn : data.docs[0].isbn[0],
        image : "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg",
        reviews : [{}],
        description : "No description. Write one."
      };

      console.log(data.docs[0].title_suggest);
      console.log("http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg");


      $scope.books.push(bookObj);

    }


});
