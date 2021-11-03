var express = require('express');
var router = express.Router();
var fs = require('fs');
var crypto = require('crypto');
var db = require('../db');

router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if(err){return next(err);}
        db.run('INSERT INTO user (username, hashed_password, salt, name) VALUES (?, ?, ?, ?)',[
            req.body.username,
            hashedPassword,
            salt,
            req.body.name 
        ], function(err){
            if (err) {return next(err);}
            var user = {
                id : this.lastID.toString(),
                username: req.body.username,
                displayName : req.body.name
            };
            req.login(user, function(err){
                if(err){return next(err);}
                //res.redirect('/');
                res.render('confirmation', {first_name: user.first_name, last_name: user.last_name});
            });
        });    
    });
});

module.exports = router;