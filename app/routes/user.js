var express = require('express');
var router = express.Router();

/* GET THE listing. */
router.get('/user', function(req, res) {
    res.send('this is THE user');
});

module.exports = router;
