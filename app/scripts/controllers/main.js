'use strict';

angular.module('bookApp')
  .controller('mainCtrl', function( $scope, MainService ) {

    MainService.getBooks(function(res) {
      console.log(res);
    });

});