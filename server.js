// Dependencies
const fs = require('fs');
const hbs = require('express-hbs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Globals
var app = express();

// App setup
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 5000);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('static'));

// Init
app.listen(app.get('port'), function() {
  console.log(`All good, started app on http://localhost:${app.get('port')}`);
});

app.get('/', function(req, res) {
  res.render(__dirname + '/index');
});
