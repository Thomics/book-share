'use strict';

angular.module('bookApp')
  .service( 'BookService', ["$http", "$q", function ( $http, $q ) {

    this.getBook = function( title ) {
        return $http.get("https://openlibrary.org/search.json?&jscmd=details&q=" + title);
    };

    //todo Implement user accounts, then revisit functionality for getting specific users books.
    this.getUserBooks = function( ) {
      return $http.get('/api/books');
    };


    this.saveBooks = function( books ) {

      var queue = [];

      books.forEach(function(book) {
        var request;

        if (!book._id) {
          request = $http.post('/api/books', book);
          queue.push(request);
        }
      });

      return queue;

    };


    this.deleteBook = function( book ) {

      console.log(book);
      if (!book._id) {
        return $q.resolve();
      }

      return $http.delete('/api/books/' + book._id).then(function() {
        console.log("I deleted the " + book.name + " book!");
      });

    };



  }]);
