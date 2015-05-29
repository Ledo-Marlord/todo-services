var db = require('../../config/db');
var User = require('../models/user');

var ItemController = {

    getItems: function (req, res) {
        res.send('items get');
    },

    getItemById: function (req, res) {

    },

    createItem: function (req, res) {
        var uid = req.params.uid;
        var lid = req.params.lid;
        var body = req.body;

        var item = {
            name: body.name,
            completed: false,
            dateCreated: new Date()
        };

        User.findOne({ 'userID': uid}, function (err, user) {
            if (err) console.log(err);
            var list = user.lists.id(lid);
            list.items.push(item);
            user.save(function(err, user) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.send('error code: ' + err.code);
                    else
                        return res.send(err);
                }
                // return a message
                console.log(user.lists.items);
                res.json({message: 'saved user item'});
            });
        })
    },

    updateItem: function (req, res) {

    },

    deleteItem: function (req, res) {

    }
};

module.exports = ItemController;