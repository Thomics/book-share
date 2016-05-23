'use strict';

(function() {

  var app = angular.module("bookApp", ['ngAnimate']);


  app.controller('mainCtrl', function($scope) {

    //$scope.books = bookJSON;//Working version
    //$scope.books = bookList;
    //debugger;
    $scope.books = addBooksToList(books);

  });


  var books= ["The Count of Monte Cristo", "Name of the Wind",
    "You Are a Badass", "Surely You're Joking Mr. Feynman"];

  var bookList= [];

  //getInfoByTitle("Surely You're Joking Mr. Feynman");
  //addBooksToList(books);

//Replaces the spaces in a title with + signs.
//TODO: add input validation for multiple spaces.
  function replaceSpaces(title) {
    return title.split(' ').join('+');
  }


  function getInfoByTitle(title) {

    var bookObj = {};

    //Search and get the book by the title of the book.
    $.getJSON("https://openlibrary.org/search.json?q=" + title, {}, function (data) {

      bookObj["title"] = data.docs[0].title_suggest;
      bookObj["isbn"] = data.docs[0].isbn[0];
      bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
      bookObj["reviews"] = [{}];
      bookObj["description"] = "Write a description? Or check back soon.";

      bookList.push(bookObj);
      console.log(bookList);

      //return bookList;
    });

  }


  function addBooksToList(list) {

    for ( var i = 0; i < list.length; i++ ) {
      getInfoByTitle(list[i]);
    }

    debugger;
    return bookList;

  }

})();

//Search and get the information about the book using the isbn.
var title;
var isbn = "ISBN:9780553213508";


$.ajax({
  type:"GET"
  //, url:"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback="
  //, url:"https://openlibrary.org/api/books?bibkeys=ISBN:9780553213508&jscmd=details&callback="
  , url:"https://openlibrary.org/api/books?bibkeys=" + isbn + "&jscmd=details&callback="
  , dataType:"jsonp",
  success: function(data) {
    //console.log(data);
    //title = data[isbn].details.title;
    //console.log(title);
  }
});