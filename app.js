

var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const flash = require('express-flash')
var indexRouter = require('./routes/index');
var createAccountRouter = require('./routes/createAccount');
var submitRouter = require('./routes/submit');
var loginSubmitRouter = require('./routes/loginSubmit');
var dashboardRouter = require('./routes/dashboard.js');
var logoutRouter = require('./routes/logout.js')

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport config of strategy and search user
require('./config/passport-config')(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/**if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}**/ 


app.use(session({
  secret: "randomstring",
  resave: false,
  saveUninitialized: false
}))

//Passport middleware to initialize session
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/createAccount', createAccountRouter);
app.use('/submit', submitRouter);
app.use('/loginSubmit', loginSubmitRouter);
app.use('/dashboard', dashboardRouter);
app.use('/logout', logoutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
