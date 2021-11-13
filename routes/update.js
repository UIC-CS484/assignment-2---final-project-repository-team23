var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('../db');

router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){
    db.get('update user set username = ? where user = ?', [req.body.username, req.body.id], function(err, rowid){
        if (err) {return cb(err);}
        res.send(popup('User is updated'));
    }
)});





module.exports = router;