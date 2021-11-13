var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('../db');

router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){
    db.get('delete from user where id = ?', [req.user.id], function(err, row){
        if(err){return cb(err);}
        res.send(popup('User is deleted'));
        res.redirect('/');
})});



module.exports = router;