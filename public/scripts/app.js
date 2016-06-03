'use strict';

(function() {

  var app = angular.module("bookApp", ['ngAnimate']);

  app.controller('mainCtrl', function($scope) {

    $scope.books = calcPromise.then(setBooks).catch(function(err){
      console.log(err);
    });


  });



  var bookList = [];

  var calcPromise = new Promise(function( resolve, reject ) {

    var bookObj = {};

    //Search and get the book by the title of the book.
    $.getJSON("https://openlibrary.org/search.json?q=Happy" , {}, function (data) {

      bookObj["title"] = data.docs[0].title_suggest;
      bookObj["isbn"] = data.docs[0].isbn[0];
      bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
      bookObj["reviews"] = [{}];
      bookObj["description"] = "Write a description? Or check back soon.";

      bookList.push(bookObj);
      resolve(bookList);


    });

  });


  //calcPromise.then(setBooks).catch(function(err){
  //  console.log(err);
  //});

  function setBooks(data) {
    //$scope.books = data;
    return data;
  }



})();
