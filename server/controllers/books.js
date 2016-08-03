"use strict";
var passport = require('passport');
var mongoose = require('mongoose');
var Books = mongoose.model('Book');


module.exports.getBooks = function(req, res) {

  Books.find({}, function(err, books) {

    if (err) { return res.status(500).json({ message: err.message }); }

    res.json({ books: books });

  });
};


module.exports.addBooks = function(req, res) {

  var book = req.body;
  Books.create(book, function (err, book) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'book': book, message: 'Book Created'});
  });
};


module.exports.deleteBook = function(req, res) {

  var id = req.params.id;
  Books.findByIdAndRemove(id, function (err, result) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({message: 'Book Deleted'});
  });
};
