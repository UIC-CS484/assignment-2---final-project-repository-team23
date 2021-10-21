if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
let users = require('../users.json');

function initialize(passport, getUserByEmail){
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null){
           return done(null, false, {message: "No user with that email"}) 
        }
        try {
            for (var index = 0; index < users.length; ++index) {
                var user = users[index];
                if(await bcrypt.compare(password, user.password)){
                    return done(null, user);
                }
                else{
                  return done(null, false, {message: "No user with that email"});
                }
            }
            
        } catch (error) {
            return done(error)
        }

    }
    passport.use(new LocalStrategy({usernameField: 'email'}), 
    authenticateUser)

    passport.serializeUser((user, done) => {})
    passport.deserializeUser((id, done) => {})
}

module.exports = initialize

const bcrypt = require('bcrypt')

module.exports = function(passport) {
console.log("Passport Function triggered");
//Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11

function initialze(passport, getUserByEmail, getUserById){
    const authenticateUser = async(email, password, done) =>  {
        
        for (var index = 0; index < users.length; ++index) {
            var user = users[index];
            if(user.email == username && user.password == password){
                done(null, user);
            }
            else{
              done(null, false);
            }
        }
        
    }
}

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, authenticateUser))

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(function(user, done) {
	return done(null, getUserById(id)); //you can access with req.user
});

}