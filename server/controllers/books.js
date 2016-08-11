'use strict';
var passport = require('passport');
var mongoose = require('mongoose');
var Books = mongoose.model('Book');

function checkError(res, err) {
  if (err) { return res.status(500).json({ message: err.message }); }
}

module.exports.getBooks = function(req, res) {

  Books.find({}, function(err, books) {

    checkError(res, err);

    res.json({ books: books });

  });
};

module.exports.getOwnerBooks = function(req, res) {

  Books.find({owner: req.params.owner}, function(err, books) {

    checkError(res, err);

    res.json({ books: books });

  });
};


module.exports.addBooks = function(req, res) {

  var book = req.body;
  Books.create(book, function (err, book) {

    checkError(res, err);

    res.json({'book': book, message: 'Book Created'});
  });
};


module.exports.deleteBook = function(req, res) {

  var id = req.params.id;
  Books.findByIdAndRemove(id, function (err, result) {

    checkError(res, err);

    res.json({message: 'Book Deleted'});
  });
};
