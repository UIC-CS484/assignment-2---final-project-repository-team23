var express = require('express');
var router = express.Router();
router.use(express.urlencoded({extended:false}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

