'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, BookService ) {

    $scope.books = [];

    var arr = ["The+Count+of+Monte+Cristo", "Name+of+the+Wind",
      "I+Am+Legend", "Surely+You're+Joking+Mr.+Feynman"];

    for ( var i = 0; i < arr.length; i++ ) {
      BookService.getBooks(arr[i])
        .success(function(data) {

          var bookObj = {
            title : data.docs[i].title_suggest,
            isbn : data.docs[i].isbn[0],
            image : "http://covers.openlibrary.org/b/isbn/" + data.docs[i].isbn[0] + "-M.jpg",
            reviews : [{}],
            description : "No description. Write one."
          };

          $scope.books.push(bookObj);
          //console.log(bookObj.title);
          //console.log($scope.books);

        }).error(function(err) {
          console.log(err);
        });
    }


    $scope.newBook = 'hi';

    $scope.getNewBook = function(book) {
      console.log('hello');

      BookService.getBooks(book)
        .success(function(data){
          //console.log(data);

          var bookObj = {
            title : data.docs[i].title_suggest,
            isbn : data.docs[i].isbn[0],
            image : "http://covers.openlibrary.org/b/isbn/" + data.docs[i].isbn[0] + "-M.jpg",
            reviews : [{}],
            description : "No description. Write one."
          };

          $scope.books.push(bookObj);

        }).error(function(err) {

        });

      //console.log(book);
    }

});
