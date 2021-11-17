var express = require('express');
var router = express.Router();
var db = require('../db');

router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){
    db.get('delete from user where id = ?', [req.user], function(err, rowid){
        if(err){return cb(err);}
    });
    res.render('/index');
});



module.exports = router;