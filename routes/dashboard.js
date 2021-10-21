var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
router.use(express.urlencoded({extended:false}))

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userInfo = req.user;
    console.log(req.user);

    res.render('confirmation', {userInfo});
    
});

module.exports = router;