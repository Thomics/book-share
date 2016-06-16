'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, MainService ) {

    MainService.getBooks( function( res ) {
      MainService.createBookLibrary( res, function (data) {
        console.log( data );
        console.log(data.title);
        $scope.books = data;
        $scope.title = data.title;
      });
    });

});