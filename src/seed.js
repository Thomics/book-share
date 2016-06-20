//"use strict";
//
//var Book = require('./models/books');
//
//
//var books = [
//  {
//    "userName": "timmy",
//    "firstName" : "Tom",
//    "lastName" : "Conto",
//    "books" : [
//      {
//        "title" : "Shrek",
//        "isbn" : "087499456X",
//        "image" : "http://covers.openlibrary.org/b/isbn/087499456X-M.jpg",
//        "reviews" : [{}],
//        "description" : "No description. Write one."
//      },
//      {
//        "title" : "The Dark Tower",
//        "isbn" : "0434893110",
//        "image" : "http://covers.openlibrary.org/b/isbn/0434893110-M.jpg",
//        "reviews" : [{}],
//        "description" : "No description. Write one."
//      },
//      {
//        "title" : "shrek",
//        "isbn" : "087499456X",
//        "image" : "http://covers.openlibrary.org/b/isbn/087499456X-M.jpg",
//        "reviews" : [{}],
//        "description" : "No description. Write one."
//      },
//      {
//        "title" : "Pride and Prejudice",
//        "isbn" : "1936594293",
//        "image" : "http://covers.openlibrary.org/b/isbn/1936594293-M.jpg",
//        "reviews" : [{}],
//        "description" : "No description. Write one."
//      }]
//  }
//];
//
////Checks to make sure that this user doesn't already exists, if it doesn't
////it will create the object.
//books.forEach(function(book, index) {
//  Book.find({ 'userName': book.userName }, function(err, books) {
//
//    if (!err && !books.length) {
//      Book.create({
//
//      })
//    }
//
//  });
//});

