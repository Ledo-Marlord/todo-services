var express = require('express');
var router = express.Router({mergeParams: true});
var db = require('../../config/db');
var User = require('../models/user');
var Item = require('../models/item');

router.route('/')
    .get(function(req, res) {

        res.send({message: 'items get'});
    });

router.route('/:iid')
    .get(function(req, res) {

        console.log(req.params)
    });

module.exports = router;
