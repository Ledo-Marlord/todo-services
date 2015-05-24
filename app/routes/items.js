var express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router({mergeParams: true});
var db = require('../../config/db');
var User = require('../models/user');
var Item = require('../models/item');

router.route('/')
    .get(function(req, res) {

        res.send({message: 'items get'});
    })
    .post(function(req, res) {
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
    });

router.route('/:iid')
    .get(function(req, res) {

        console.log(req.params)
    });

module.exports = router;
