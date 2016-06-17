'use strict';

angular.module('bookApp')
  .service( 'MainService', function ( $http, $q ) {

    var arr = ["The+Count+of+Monte+Cristo", "Name+of+the+Wind",
      "You+Are+a+Badass", "Surely+You're+Joking+Mr.+Feynman"];

    this.getBooks = function( callback ) {
      for ( var i = 0; i < arr.length; i++ ) {
        $http.get("https://openlibrary.org/search.json?q=" + arr[i]).then(callback);
      }
    };

    this.createBookLibrary = function ( data, callback ) {

      var books = {
        title : data.data.docs[0].title_suggest,
        isbn : data.data.docs[0].isbn[0],
        image : "http://covers.openlibrary.org/b/isbn/" + data.data.docs[0].isbn[0] + "-M.jpg",
        reviews : [{}],
        description : "Write a description? Or check back soon."
      };

      callback(books);
    };




});