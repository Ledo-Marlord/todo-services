var express = require('express');
var router = express.Router({mergeParams: true});
var db = require('../../config/db');
var itemsRouter = require('./items');
var User = require('../models/user');

router.route('/')
    .get(function(req, res) {
        res.send({message: 'items get'});
    })
    .post(function(req, res) {
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
    });


router.route('/:lid')
    .get(function(req, res) {

        console.log(req.params)
    });

router.use('/:lid/items', itemsRouter);

module.exports = router;
