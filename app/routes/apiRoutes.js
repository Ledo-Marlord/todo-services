var express = require('express');
var router = express.Router();
var db = require('../../config/db');
var User = require('../models/user');

router.get('/user', function(req, res) {

    User.find(function(err, users) {
        if (err) res.send(err);

        // return the users
        res.json(users);

        console.log(res.json(users));
    });
});

router.post('/user/save', function(req, res) {
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
        res.json({ message: 'User created!' });
    });

});

module.exports = router;
