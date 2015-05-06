var express = require('express');
var router = express.Router();
var db = require('../../config/db');

router.route('/')
    .get(function(req, res) {
        res.send({message: 'items get'});
    });

module.exports = router;
