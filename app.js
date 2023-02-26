const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

// Connecting to MongoDB
let mongoose = require('mongoose');
let db = process.env.DB;

mongoose.connect(db);
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection Error'));
mongoDB.once('open', () => {
  console.log('Connected to Mongo DB...')
});

//* Require Routes
const homeRouter = require('./routes/home');
const aboutMe = require('./routes/aboutMe');
const projects = require('./routes/projects');
const services = require('./routes/services');
const contact = require('./routes/contact');
const login = require('./routes/login');
const businessContacts = require('./routes/businessContacts');
const passport = require('passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,

}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const { User } = require('./models/user');
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add paths to pages in express
app.use('/', homeRouter);
app.use('/about-me', aboutMe)
app.use('/projects', projects)
app.use('/services', services)
app.use('/contact', contact)
app.use('/login', login);
app.use('/business-contacts', businessContacts);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
