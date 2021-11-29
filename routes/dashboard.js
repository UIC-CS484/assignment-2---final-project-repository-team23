var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userInfo = req.user;
    let userNameInfo = req.user.username;
    let userNAmeInfo2 = req.user.displayName;
    
    console.log(userInfo);
    console.log(userNameInfo);
    console.log(userNAmeInfo2);
    res.render('dashboard', {userNAmeInfo2});
    
});

module.exports = router;