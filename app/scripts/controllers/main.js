'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, MainService ) {

    MainService.getBooks(function(res) {
      console.log(res.data.docs[0]);
      $scope.books = res.data.docs[0];
      $scope.title = res.data.docs[0].title;
    });

});