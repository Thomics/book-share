var express = require('express');

var router = express.Router();
var Books = require('../models/books.js');

router.get('/todos', function(req, res) {
  res.json({books:books});
});

module.exports = router;
