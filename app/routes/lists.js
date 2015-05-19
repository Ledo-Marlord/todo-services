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
        console.log(req.params, req.body);
        var uid = req.params.uid;
        var listToCreate = req.body.list;
        User.findOne({ 'userID': uid }, function (err, user) {
            if (err) console.log(err);
            console.log(user.lists);
        })
    })


router.route('/:lid')
    .get(function(req, res) {

        console.log(req.params)
    });

router.use('/:lid/items', itemsRouter);

module.exports = router;
