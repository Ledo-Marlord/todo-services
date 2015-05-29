var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema   = new Schema({
    name: String,
    completed: Boolean,
    dateCreated: Date
});

var ListSchema   = new Schema({
    title: String,
    completed: Boolean,
    dateCreated: Date,
    items: [ItemSchema]

});

var UserSchema   = new Schema({
    userID: String,
    password: String,
    dateCreated: Date,
    lastAccessedList: String,
    lists: [ListSchema]

});

module.exports = mongoose.model('User', UserSchema);