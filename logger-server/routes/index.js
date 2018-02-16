var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logger/me', function(req, res, next) {
  res.render('index', { title: 'This is noor' });
});

module.exports = router;
