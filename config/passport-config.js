const LocalStrategy = require('passport-local').Strategy;
let users = require('../users.json');


module.exports = function(passport) {
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, async function(username, password, done) {
    for (var index = 0; index < users.length; index++) {}
      var user = users[index];
      if (user.email == email && user.password == password){
        done(null, user)
      }else{
        done(null, false);
      }
          
    }
));

passport.serializeUser(function(user, done) {
	done(null, user); 
});

passport.deserializeUser(function(user, done) {
	for(var index = 0; index < users.length; ++index){
    var userFromJson= users[index];
    if(userFromJson == user){
      done(null, user);
    }else{
      done(null, false);
    }
  }
  done(null, user);
});

}