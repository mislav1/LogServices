let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

var config = require('./_config');

let routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use("/", routes);

var server = app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

module.exports = server;