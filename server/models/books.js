'use strict';

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  image: String,
  author: String,
  reviews: [String],
  description: String,
  owner: String,
  ownerName: String,
  dateAdded: Object
});

//This makes mongoose create a model called book, using the bookSchema.
var model = mongoose.model('Book', bookSchema);

module.exports = model;
