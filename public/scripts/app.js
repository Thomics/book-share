'use strict';

(function() {

  var app = angular.module("bookApp", ['ngAnimate']);

  app.controller('mainCtrl', function($scope) {

    //calcPromise.then(function(data) {
    //  $scope.books = data;
    //  console.log($scope.books);
    //}).then(function() {
    //  console.log($scope.books);
    //
    //}).catch(function(err){
    //  console.log(err);
    //});

  });


  $.getJSON("https://openlibrary.org/search.json?q=Name+of+the+wind" , {}, function (data) {

    var bookObj = {};

    bookObj["title"] = data.docs[0].title_suggest;
    bookObj["isbn"] = data.docs[0].isbn[0];
    bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
    bookObj["reviews"] = [{}];
    bookObj["description"] = "Write a description? Or check back soon.";

    bookList.push(bookObj);
    bookList.push(bookObj);

    //$scope.books = bookList;
    //
    //console.log($scope.books);

    $('#stupid').html('<img src= ' + "'http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg' />"  );
    console.log('why');
  });




  var bookList = [];

  var calcPromise = new Promise(function( resolve, reject ) {
    resolve([1,2,3,4]);
  });


  //var calcPromise = new Promise(function( resolve, reject ) {
  //
  //  var bookObj = {};
  //
  //  //Search and get the book by the title of the book.
  //  $.getJSON("https://openlibrary.org/search.json?q=Happy" , {}, function (data) {
  //
  //    bookObj["title"] = data.docs[0].title_suggest;
  //    bookObj["isbn"] = data.docs[0].isbn[0];
  //    bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
  //    bookObj["reviews"] = [{}];
  //    bookObj["description"] = "Write a description? Or check back soon.";
  //
  //    bookList.push(bookObj);
  //    bookList.push(bookObj);
  //    resolve(bookList);
  //
  //
  //  });
  //
  //});


  //calcPromise.then(setBooks).catch(function(err){
  //  console.log(err);
  //});



})();
