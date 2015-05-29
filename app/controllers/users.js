var db = require('../../config/db');
var User = require('../models/user');

var UserController = {

    getUsers: function (req, res) {
        User.find(function(err, users) {
            if (err) res.send(err);
            res.json(users);
        });
    },

    getUserById: function (req, res) {

    },

    createUser: function (req, res) {
        console.log('hi');
        var user = new User();
        console.log('hi2');
        user.userID = req.body.userID;
        user.password = req.body.password;
        user.dateCreated = new Date();
        user.lastAccessedList = '';
        user.save(function(err, user) {
            console.log('hi3');
            if (err) {
                // duplicate entry
                if (err.code == 11000)
                    return res.json({ success: false, message: 'A user with that username already exists. '});
                else
                    return res.send(err);
            }
            // return a message
            console.log(user);
            res.json(user);
        });
    },

    updateUser: function (req, res) {

    },

    deleteUser: function (req, res) {

    }
};

module.exports = UserController;