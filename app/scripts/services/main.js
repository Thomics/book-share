'use strict';

angular.module('bookApp')
.service( 'MainService', function ( $http ) {

  this.getBooks = function( callback ) {
    $http.get("https://openlibrary.org/search.json?q=Name+of+the+wind").then( callback );

  };

  this.createBookLibrary = function ( data, callback ) {

    var bookObj = {};

    bookObj["title"] = data.data.docs[0].title_suggest;
    bookObj["isbn"] = data.data.docs[0].isbn[0];
    bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.data.docs[0].isbn[0] + "-M.jpg";
    bookObj["reviews"] = [{}];
    bookObj["description"] = "Write a description? Or check back soon.";

    var arr = [bookObj];

    callback(arr);
  };


});