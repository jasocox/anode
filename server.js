var express = require('express');
var app = express();
var config = require('./config');

app.use(express.static(config.public));

app.listen(config.port, function() {
  console.log('Started server at', config.port);
});
