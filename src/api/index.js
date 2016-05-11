'use strict';

var express = require('express');
var router = express.Router();
var Books = require('../models/books.js');

router.get('/books', function(req, res) {
  Books.find({}, function(err, books) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ books: books });
  });
});


module.exports = router;




