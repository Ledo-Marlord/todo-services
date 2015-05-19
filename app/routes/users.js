var express = require('express');
var router = express.Router();
var db = require('../../config/db');
var User = require('../models/user');
var listsRouter = require('./lists');

router.route('/')
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err) res.send(err);
            res.json(users);
        });
    })
    .post(function(req, res) {
        console.log(req.body);
        var user = new User();
        user.userID = req.body.userID;
        user.password = req.body.password;
        user.dateCreated = new Date();
        user.lastAccessedList = '';
        user.save(function(err, user) {
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
    });

    router.use('/:uid/lists', listsRouter);

module.exports = router;
