let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
const formidableMiddleware = require('express-formidable');
const serveIndex = require('serve-index');
var fs = require('fs-extra');

let routes = require('./routes');

if(!fs.existsSync(path.join(__dirname, 'Logs'))) {
      
  fs.mkdirSync(path.join(__dirname, 'Logs'));
  
}
app.use('/logs', express.static(__dirname + '/Logs'));
app.use('/logs', serveIndex(__dirname + '/Logs', {
    view: "details",
    icons: true
}));

app.use(formidableMiddleware({
  uploadDir: path.join(__dirname, 'Logs')
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use("/", routes);

var server = app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

module.exports = server;