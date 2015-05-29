var db = require('../../config/db');
var User = require('../models/user');

var ListController = {

    getLists: function (req, res) {
        res.send({message: 'lists get'});
    },

    getListsById: function (req, res) {

    },

    createList: function (req, res) {
        var uid = req.params.uid;
        var body = req.body;

        var list = {
            title: body.title,
            completed: false,
            dateCreated: new Date()
        };

        User.findOne({ 'userID': uid }, function (err, user) {
            if (err) console.log(err);

            user.lists.push(list);
            user.save(function(err, user) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.send('error code: ' + err.code);
                    else
                        return res.send(err);
                }
                // return a message
                console.log(user.lists);
                res.json({message: 'saved user list'});
            });
        })
    },

    updateList: function (req, res) {

    },

    deleteList: function (req, res) {

    }
};

module.exports = ListController;