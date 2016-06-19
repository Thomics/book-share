'use strict';

angular.module('bookApp')
  .service( 'BookService', function ( $http, $q ) {

    this.getBook = function( title ) {
        return $http.get("https://openlibrary.org/search.json?&jscmd=details&q=" + title);
    };

    this.getUserBooks = function( username ) {
      return $http.get('../mock/user-books.json');
    }


  });

