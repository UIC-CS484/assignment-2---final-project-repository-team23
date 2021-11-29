var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

var indexRouter = require('./routes/index');
var createAccountRouter = require('./routes/createAccount');
var submitRouter = require('./routes/submit');
var loginSubmitRouter = require('./routes/loginSubmit');
var dashboardRouter = require('./routes/dashboard.js');
var logoutRouter = require('./routes/logout');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');
var userFeedbackRouter = require('./routes/userFeedback');

var app = express();

require('./boot/db')();
require('./boot/auth')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: "JenniferLopez",
  resave: false,
  saveUninitialized: false
}));

app.use(function(req, res, next){
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !! msgs.length;
  req.session.messages = [];
  next();
})


//Passport middleware to initialize session
app.use(passport.initialize());
app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/createAccount', createAccountRouter);
app.use('/submit', submitRouter);
app.use('/loginSubmit', loginSubmitRouter);
app.use('/dashboard', dashboardRouter);
app.use('/logout', logoutRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/userFeedback', userFeedbackRouter);


module.exports = app;
