var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('../db');
var passport = require('passport');
router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){
    db.run('INSERT INTO USER_FEEDBACK (user_feedback2user, feedback, appointment) VALUES (?, ?, ?)',
    [req.user.id, req.body.feedback, req.body.appointment],
    function(err){
        if(err){return next(err);}
        var user_feedback = {
            user_feedback_id : this.lastID.toString(),
            user_feedback2user: req.user.id, 
            feedback:req.body.feedback,
            appointment: req.body.appointment
        };

    }
)
let response = 'Feedback noted!';

let username = req.user.displayName;
res.render('dashboard', {username});
})



module.exports = router;