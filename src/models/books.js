"use strict";

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String,
  review: Object,
  likes: Number
});

var model = mongoose.model('Books', bookSchema);

module.exports = model;