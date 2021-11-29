var passport = require('passport');
var Strategy = require('passport-local');
var crypto = require('crypto');
var db = require('../db');

module.exports = function(){
    passport.use(new Strategy(function(username, password, cb){
        console.log("Passport has been triggered");
       db.get('select rowid as id, * from user where username = ?', [username], function(err, row){

            if (err) {return cb(err); }
            if (!row) {return cb(null, false, {message: 'Incorrect username or password.'});}

            crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword){
                if (err) { return cb(err); }
                if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                  return cb(null, false, { message: 'Incorrect username or password.' });
                }
            //var user = row.id.toString();   
            var user = {
                id: row.id.toString(),
                username : row.username,
                displayName: row.name
            };
            cb(null, user)
        });

       }); 
    }));

    passport.serializeUser(function(user, cb){
       // process.nextTick(function(){
            //cb(null, {id:user.id, username: user.username});
            cb(null, user);
       // });
    });

    passport.deserializeUser(function(user,cb){
        //passport.nextTick(function(){
            return cb(null,user);
        //});
    });


};