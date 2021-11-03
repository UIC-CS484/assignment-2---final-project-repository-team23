var express = require('express');
var router = express.Router();
var passport = require('passport');


router.post('/', passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/',
	failureMessage: true
}))

module.exports = router;