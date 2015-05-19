var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    userID: String,
    password: String,
    dateCreated: Date,
    lastAccessedList: String,
    lists: []

});

module.exports = mongoose.model('User', UserSchema);