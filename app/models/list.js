var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item = require('./item');

var ListSchema   = new Schema({
    title: String,
    completed: Boolean,
    dateCreated: Date,
    items: [Item]

});

module.exports = ListSchema;
