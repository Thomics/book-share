//http routing framework
var express = require('express');
//A Router instance is a complete middleware and routing system
var router = express.Router();
//Middleware that validates JsonWebTokens and sets req.user.
var jwt = require('express-jwt');


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
router.get('/books', ctrlBooks.getBooks);
router.get('/books/:owner', ctrlBooks.getOwnerBooks);
router.post('/books', ctrlBooks.addBooks);
router.delete('/books/:id', ctrlBooks.deleteBook);


module.exports = router;
