'use strict';
var express = require('express');
var Promise = require('bluebird');
var config = require('./config');
//var logger = require('./app/common/log'); // retuns logger and inits app logger configuation
var apiApp = require('./app/index');

function wrap (genFn) { // 1  - Generator Wrapper From Express 
    var cr = Promise.coroutine(genFn) // 
    return function (req, res, next) { // 3
        cr(req, res, next).catch(next) // 4
    }
}

if (process.env.NODE_ENV !== 'test') {  // this does not seem to work???
    var logger = require('./app/common/log'); // retuns logger and inits app logger configuation
} else {
    var logger = require('winston');
    logger.remove(logger.transports.Console);
}

var app = express();

// Simple Security - for bots discovering based on x-powered-by
app.disable('x-powered-by'); 

// Using a Generator here to guarantee fufilled promise - Check Express Documentation 
app.get('/v1/api/term/:tid/longest-preview-media-url', wrap(function *(req, res) {
  var data = yield apiApp(req.params.tid);
//  console.log(data);
  res.json(data);
}));

app.use(function (err, req, res, next) {
    if (err) {
        console.log(err);
//        logger.error('Application Error: ', err );
        res.status(500).json({ error: "500: Internal Server Error" });
    }
});

// Default 404
app.use(function (req, res, next) {
    logger.error('404: Not Found', req.url );
    res.status(404).json({ error: "404: Not Found" });
})


var port = process.env.PORT || config.server.port;

// start server
app.listen(port);

console.log('Server listening on Port ' + port);

module.exports = app;
