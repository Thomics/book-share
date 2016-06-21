"use strict";

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  //userName: String,
  //firstName: String,
  //lastName: String,
  //books: [{
    title: String,
    //isbn: String,
    image: String,
    //reviews: [Object],
    //description: String
  //}]
});

//This makes mongoose create a model called book, using the bookSchema.
var model = mongoose.model('Book', bookSchema);

module.exports = model;
