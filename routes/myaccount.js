var express = require('express');
var ensureLoggedIn = require('connect-ensure-login')
.ensureLoggedIn;
var db = require('../db');
var router = express.Router();

/*GET users listing*/
router.get('/', 
ensureLoggedIn(),
function(req, res, next) {
    db.get('SELECT rowid as id, username, name from users where rowid = ?',
    [req.user.id], function(err, row){
        if(err) {return next(err); }

        var user = {
            id: row.id.toString(),
            username: row.username,
            diplayName: row.name
        };
        res.render('profile', {user: user});
    });
});

module.exports = router