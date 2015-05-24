var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var List = require('./list');

var UserSchema   = new Schema({
    userID: String,
    password: String,
    dateCreated: Date,
    lastAccessedList: String,
    lists: [List]

});

module.exports = mongoose.model('User', UserSchema);