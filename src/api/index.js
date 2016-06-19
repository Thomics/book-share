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


module.exports = router;




