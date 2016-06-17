'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, MainService ) {

    $scope.books = [];
    //MainService.getBooks( function( res ) {
    //
    //  MainService.createBookLibrary( res, function (data) {
    //    //console.log( data );
    //    //console.log(data.title);
    //    //$scope.books = data;
    //    //$scope.title = data.title;
    //    $scope.books.push(data);
    //    console.log($scope.books);
    //  });
    //
    //});


    MainService.getBooks( function ( data ) {


      var books = {
        title : data.data.docs[0].title_suggest,
        isbn : data.data.docs[0].isbn[0],
        image : "http://covers.openlibrary.org/b/isbn/" + data.data.docs[0].isbn[0] + "-M.jpg",
        reviews : [{}],
        description : "Write a description? Or check back soon."
      };

      $scope.books.push(books);

    });


});
