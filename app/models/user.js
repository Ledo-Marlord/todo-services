var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    userID: String,
    password: String,
    dateCreated: Date,
    lastAccessedList: String,
    lists: [
        {
            title: String,
            completed: Boolean,
            dateCreated: Date,
            items: [
                {
                    name: String,
                    completed: Boolean,
                    dateCreated: Date
                }
            ]
        }
    ]

});

module.exports = mongoose.model('User', UserSchema);