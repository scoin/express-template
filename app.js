var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var routeParser = require('./setup/route-parser');
var routes = require('./config/routes');

var initResponses = require(__dirname + "/config/response");

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//stuff to do before every route
app.use(function(req, res, next){
  initResponses(req, res);
  next()
})

app.use('/', routeParser(routes, path.normalize(__dirname + "/api/routes")));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
