var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
var mainRouter = require('./routes/index');
// const formidableMiddleware = require('express-formidable');

var app = express();

//cors enabled for all routes
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(formidableMiddleware());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var options =  {  //mongodb options
  useNewUrlParser: true, useUnifiedTopology: true
};
//mongoose connection string
const passwd = encodeURIComponent('devUser1#3!');
mongoose.connect(`mongodb://devUser:${passwd}@0.0.0.0:28899/devfindApp_db`, options)
        .then(() => console.log('connection successful'))
        .catch((err) => console.error(err));


app.use('/', mainRouter);

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
