'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();
var router = require('./api/index');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

require('./database');


app.use('/', express.static('public'));

app.use(parser.json());

app.use('/api', router);

app.listen(port, function() {
  console.log('Server on port:' + port);
});
