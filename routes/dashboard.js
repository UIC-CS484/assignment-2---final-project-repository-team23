var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userInfo = req.user.username;
    console.log(userInfo);

    let userId = req.user.id;
    console.log(userId);

    res.render('dashboard', {data: userInfo, user: userId});
    
});

module.exports = router;