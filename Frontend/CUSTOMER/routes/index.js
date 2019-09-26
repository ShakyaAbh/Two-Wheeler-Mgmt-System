var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customer/login', function(req, res, next) {
  res.render('customer/login', { title: 'Express' });
});

router.get('/customer/registration', function(req, res, next) {
  res.render('customer/registration', { title: 'Express' });
});

module.exports = router;
