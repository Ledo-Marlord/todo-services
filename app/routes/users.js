var express = require('express');
var router = express.Router();
var db = require('../../config/db');
var User = require('../models/user');

router.route('/')
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err) res.send(err);
            if (!users.length) {
                var newUser = new User({
                    name: 'Node Created User',
                    userID: 1,
                    phone: 1111111111
                });
                newUser.save(function (err, user) {
                    if (err) { console.log(err); }
                    console.log('Api router get /user created a user because none existed.');
                    console.log(user);
                    res.json(user);
                })
            } else {
                res.json(users);
            }
        });
    })
    .post(function(req, res) {
        console.log(req.body);
        var user = new User();
        user.name = req.body.name;
        user.userID = req.body.userID;
        user.phone = req.body.phone;
        user.save(function(err) {
            if (err) {
                // duplicate entry
                if (err.code == 11000)
                    return res.json({ success: false, message: 'A user with that username already exists. '});
                else
                    return res.send(err);
            }
            // return a message
            res.send({ message: 'User created!' });
        });
    });

module.exports = router;
