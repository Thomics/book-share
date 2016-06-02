'use strict';

(function() {


  var app = angular.module("bookApp", ['ngAnimate']);


  app.controller('mainCtrl', function($scope) {



    getInfoByTitle('happy', function(data) {
      $scope.books = data;
      console.log( $scope.books);

    });


  });


  var books = ["The Count of Monte Cristo", "Name of the Wind",
    "You Are a Badass", "Surely You're Joking Mr. Feynman"];

  var bookList = [];


  function getInfoByTitle(title, callback) {
    var bookObj = {};

    //Search and get the book by the title of the book.
    $.getJSON("https://openlibrary.org/search.json?q=" + title, {}, function (data) {

      bookObj["title"] = data.docs[0].title_suggest;
      bookObj["isbn"] = data.docs[0].isbn[0];
      bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
      bookObj["reviews"] = [{}];
      bookObj["description"] = "Write a description? Or check back soon.";

      bookList.push(bookObj);

      callback(bookList);

    });

  }

  function loggit() {
    console.log('howdy');
    console.log(bookList);
  }




  function addBooksToList(list, callback) {

    for ( var i = 0; i < list.length; i++ ) {
      getInfoByTitle(list[i]);
    }

    return bookList;

  }

})();













































































//Search and get the information about the book using the isbn.
//var title;
//var isbn = "ISBN:9780553213508";

//function getData() {
//  $.ajax({
//    type:"GET"
//    //, url:"https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback="
//    //, url:"https://openlibrary.org/api/books?bibkeys=ISBN:9780553213508&jscmd=details&callback="
//    , url:"https://openlibrary.org/api/books?bibkeys=" + isbn + "&jscmd=details&callback="
//    , dataType:"jsonp",
//    success: function(data) {
//      console.log(data);
//      return data;
//    }
//  });
//}


//function getInfoByTitle(title) {
//
//  var bookObj = {};
//
//  //Search and get the book by the title of the book.
//  $.getJSON("https://openlibrary.org/search.json?q=" + title, {}, function (data) {
//
//    bookObj["title"] = data.docs[0].title_suggest;
//    bookObj["isbn"] = data.docs[0].isbn[0];
//    bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
//    bookObj["reviews"] = [{}];
//    bookObj["description"] = "Write a description? Or check back soon.";
//
//    bookList.push(bookObj);
//    console.log(bookList);
//
//    return bookList;
//  });
//
//}



//Replaces the spaces in a title with + signs.
//TODO: add input validation for multiple spaces.
function replaceSpaces(title) {
  return title.split(' ').join('+');
}