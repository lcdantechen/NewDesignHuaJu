
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
/*____________________*/
/*var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);*/

var routes = require('./controllers/routes/index');
var userRoutes = require('./controllers/routes/user');


//Server config properties
var app = express();
var PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/cv', function(req, res) {
    res.sendFile(path.join(__dirname, 'cv.html'));
})
// app.get('/resume', function(req, res) {
//     res.sendFile(path.join(__dirname, ''));
// })

app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
})