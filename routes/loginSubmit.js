var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const flash = require('express-flash')
router.use(express.urlencoded({extended:false}))

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/index',
	failureFlash: true
	}))
module.exports = router;