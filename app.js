var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require('client-sessions');
//var bcrypt = require('bcryptjs');

// Every Route is separated into distinct files present inside routes folder (My Comment)
var index = require('./routes/index');
var about = require('./routes/about');
var users = require('./routes/users');
var blogs = require('./routes/blogs');	// New
var signup = require('./routes/signup');	// New
var action_page = require('./routes/action_page');	// New
var newblog = require('./routes/newblog');	// New
var action_blog = require('./routes/action_blog');	// New
var login = require('./routes/login');	// New
var logout = require('./routes/logout');	// New

// Initializing our app to use Express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));	// Allows us to acess the data sent via web browser using req.body
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(sessions({
	cookieName: 'session',
	secret: 'Any Random String <>.;.[]843D893h48H*(Shdn8 rj',	// used for unique encryption and decryption
	duration: 30 * 60 * 1000, // Time after which session will expire (in milisecond), used for banking sites
	activeDuration: 5 * 60 * 1000
}))



app.use('/', index);
app.use('/about', about);
app.use('/users', users);
app.use('/blogs', blogs);		// New
app.use('/signup', signup);		// New
app.use('/action_page', action_page);		// New
app.use('/newblog', newblog);		// New
app.use('/action_blog', action_blog);		// New
app.use('/login', login);		// New
app.use('/logout', logout);		// New

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
