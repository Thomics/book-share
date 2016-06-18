'use strict';

angular.module('bookApp')
  .service( 'BookService', function ( $http, $q ) {

    this.getBooks = function( title ) {
        return $http.get("https://openlibrary.org/search.json?q=" + title);
    };

});

