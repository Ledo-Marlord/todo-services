var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/users', function(req, res) {
  res.render('users', { title: 'Users' });
});

module.exports = router;
