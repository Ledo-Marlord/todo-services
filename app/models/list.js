var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema   = new Schema({
    title: String,
    completed: Boolean,
    dateCreated: Date,
    items: []

});

module.exports = mongoose.model('List', ListSchema);
