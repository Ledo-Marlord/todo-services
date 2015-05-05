var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('mongo connection: open');
    console.log(db.port);
});

module.exports = db;