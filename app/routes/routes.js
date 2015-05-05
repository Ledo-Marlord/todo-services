var express = require('express');
var router = express.Router();


// serve static assets
router.use(express.static('public'));

///* GET front-end app on any unhandled route */
router.get('*', function(req, res) {
  res.sendFile('/index.html', {root: 'public'});
});

module.exports = router;
