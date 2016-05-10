"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/book-share', function(err) {
  if (err) {
    console.log('Failed to connect to MongoDB');
  } else {
    console.log('Successfully connected to MongoDB');
  }
});