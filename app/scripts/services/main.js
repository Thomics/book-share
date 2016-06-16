'use strict';

angular.module('bookApp')
.service( 'MainService', function ( $http ) {
  this.getBooks = function( callback ) {
    $http.get("https://openlibrary.org/search.json?q=Name+of+the+wind").then( callback );
  };


});