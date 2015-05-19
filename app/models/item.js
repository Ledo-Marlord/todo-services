var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema   = new Schema({
    name: String,
    completed: Boolean,
    dateCreated: Date
});

module.exports = mongoose.model('Item', ItemSchema);
