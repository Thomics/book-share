var express = require('express');
var app = express();
var router = require('./api');
require('./database');

app.use('/api', router);

app.use('/', express.static('public'));

app.listen(3000, function() {
  console.log('Server on port 3000');
});
