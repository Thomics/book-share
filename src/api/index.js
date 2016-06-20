'use strict';

var express = require('express');
var router = express.Router();

//Mongoose Schema
var Books = require('../models/books.js');


router.get('/books', function(req, res) {

  //Using the models find method to interact with the database.
  //The emtpy {} returns all books from the collection.
  Books.find({}, function(err, books) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ books: books });
  });

});


router.post('/books', function(req, res) {

  var book = req.body;

  //To store a post in the database, use the create method.
  Books.create(book, function(err, book) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    //Change this to take an updated object.
    res.json({'userName': "tommy", message: 'Book Created'});
  });

});


router.put('/books/:id', function(req, res) {
  var id = req.params.id;
  var book = req.body;

  //Verify the book exists, and that the id matches the id of the request.
  if ( book && book.id != id ) {
    return res.status(500).json({err: "Ids do not match"});
  }

  //To change a post in the database, use the findByIdAndUpdate method.
  Books.findByIdAndUpdate(id, book, {new: true}, function(err, book) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }

    //Change this to take an updated object.
    res.json({'userName': "tommy", message: 'Book Updated'});
  });

});


router.delete('/books/:id', function(req, res) {
  var id = req.params.id;

  Books.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Book Deleted' });
  });
});

module.exports = router;
