'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./src/api/index');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var db = require('./src/database');

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));


app.use('/', express.static(__dirname + '/public'));

app.use('/app', express.static('app'));


app.use('/api', router);

app.listen(port, function() {
  console.log('Server on port:' + port);
});
