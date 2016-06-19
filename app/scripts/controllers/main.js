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
            console.log(arr[i].title);
            BookService.getBooks(arr[i].title)
              .success(function(data) {

                var bookObj = {
                  title : data.docs[i].title_suggest,
                  isbn : data.docs[i].isbn[0],
                  image : "http://covers.openlibrary.org/b/isbn/" + data.docs[i].isbn[0] + "-M.jpg",
                  reviews : [{}],
                  description : "No description. Write one."
                };

                $scope.books.push(bookObj);

              }).error(function(err) {
                console.log(err);
              });
          }
        });

    };

    retrieveBooks();



    $scope.newBook = '';

    $scope.searchBook = function(book) {
      console.log('hello');

      BookService.getBooks(book)
        .success(function(data){


          var bookObj = {
            title : data.docs[0].title_suggest,
            isbn : data.docs[0].isbn[0],
            image : "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg",
            reviews : [{}],
            description : "No description. Write one."
          };

          $scope.books.push(bookObj);

        }).error(function(err) {

        });

    }




});
