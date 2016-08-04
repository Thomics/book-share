var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var console = require('console');



var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlBooks = require('../controllers/books');

//profile
router.get('/profile', auth, ctrlProfile.profileRead);

//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//get books
//router.get('/books', ctrlBooks.getBooks);
router.get('/books/:owner', ctrlBooks.getOwnerBooks);
router.post('/books', ctrlBooks.addBooks);
router.delete('/books/:id', ctrlBooks.deleteBook);


module.exports = router;
