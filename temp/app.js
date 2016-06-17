//'use strict';
//
//(function() {
//
//  var app = angular.module("bookApp", ['ngAnimate']);
//
//  app.controller('mainCtrl', function($scope) {
//
//    //calcPromise.then(function(data) {
//    //  $scope.books = data;
//    //  console.log($scope.books);
//    //}).then(function() {
//    //  console.log($scope.books);
//    //
//    //}).catch(function(err){
//    //  console.log(err);
//    //});
//
//  });
//
//
//  $.getJSON("https://openlibrary.org/search.json?q=Name+of+the+wind" , {}, function (data) {
//
//    var bookObj = {};
//
//    bookObj["title"] = data.docs[0].title_suggest;
//    bookObj["isbn"] = data.docs[0].isbn[0];
//    bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
//    bookObj["reviews"] = [{}];
//    bookObj["description"] = "Write a description? Or check back soon.";
//
//    bookList.push(bookObj);
//    bookList.push(bookObj);
//
//    //$scope.books = bookList;
//    //
//    //console.log($scope.books);
//
//    $('#stupid').html('<img src= ' + "'http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg' />"  );
//    console.log('why');
//  });
//
//
//
//
//  var bookList = [];
//
//  //var calcPromise = new Promise(function( resolve, reject ) {
//  //
//  //  var bookObj = {};
//  //
//  //  //Search and get the book by the title of the book.
//  //  $.getJSON("https://openlibrary.org/search.json?q=Happy" , {}, function (data) {
//  //
//  //    bookObj["title"] = data.docs[0].title_suggest;
//  //    bookObj["isbn"] = data.docs[0].isbn[0];
//  //    bookObj["image"] = "http://covers.openlibrary.org/b/isbn/" + data.docs[0].isbn[0] + "-M.jpg";
//  //    bookObj["reviews"] = [{}];
//  //    bookObj["description"] = "Write a description? Or check back soon.";
//  //
//  //    bookList.push(bookObj);
//  //    bookList.push(bookObj);
//  //    resolve(bookList);
//  //
//  //
//  //  });
//  //
//  //});
//
//
//  //calcPromise.then(setBooks).catch(function(err){
//  //  console.log(err);
//  //});
//
//
//
//})();
//
//
//
//
////Get the book JSON object.
//var bookJSON = (function() {
//  var bookSon;
//  $.ajax({
//    "async": false,
//    //Links as if from public
//    "url": "/scripts/books.json",
//    'success': function (data) {
//      bookSon = data;
//    }
//  });
//  shrinkDescription(bookSon, 225);
//  shrinkTitle(bookSon, 20);
//
//  return bookSon;
//})();
//
//
////Checks the description of the books character length. If it is above a set length,
////the function cuts off the excess length and appends an ellipsis.
//function shrinkDescription(bookArr, length) {
//  for ( var i = 0; i < bookArr.length; i++ ) {
//    if ( bookArr[i].description.length > length ) {
//      bookArr[i].description = bookArr[i].description.slice(0,length) + '...';
//    }
//  }
//}
//
////Checks the title of the books character length. If it is above a set length,
////the function cuts off the excess length and appends an ellipsis.
//function shrinkTitle(bookArr, length) {
//
//  for ( var i = 0; i < bookArr.length; i++ ) {
//    if ( bookArr[i].title.length > length ) {
//      bookArr[i].title = bookArr[i].title.slice(0,length) + '...';
//    }
//  }
//}
//
////module.exports = MainCtrl;