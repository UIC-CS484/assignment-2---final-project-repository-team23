var express = require('express');
var router = express.Router();
var passport = require('passport');

/**
router.post('/', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/'
	})(req, res, next);


}); */
router.post('/', 
	passport.authenticate('local', 
	{ successRedirect: '/dashboard', 
	failureRedirect: '/'}, (req,res, next) => {
	
}
))

/** 
router.post('/',  (req, res, next) =>{
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/'
		
		})(req, res, next);
	
});*/

module.exports = router;