var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userInfo = req.user;
    console.log(userInfo);

    res.render('dashboard', {userInfo});
    
});

module.exports = router;