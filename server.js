var express = require('express');
var bodyParser = require('body-parser');
//var db = require('./config/db');
var userRoutes = require('./app/routes/users');
var app = express();

app.set('port', process.env.PORT || 1337);

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1337');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

app.use('/api/users', userRoutes);

app.listen(app.get('port'));
console.log('Listening on port: ' + app.get('port') + '...');
console.log('\r\n');