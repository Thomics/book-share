//This connects our mongodb database using mongoose.
"use strict";

var mongoose = require('mongoose');

//The line 'mongodb://localhost/book-share is connecting to the mongo database, we can call it whatever we want.
//mongoose.connect('mongodb://localhost/book-share', function(err) {
mongoose.connect('mongodb://tomc:Bookshare1@ds027175.mlab.com:27175/book-share', function(err) {
  if (err) {
    console.log('Failed to connect to MongoDB' + err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});


