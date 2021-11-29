var express = require('express');
var router = express.Router();
var db = require('../db');

router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){
    console.log(req.user.id);
    db.get('delete from user where id = ?', [req.user.id], function(err, rowid){
        if(err){return cb(err);}
    });
    res.render('index');
});



module.exports = router;