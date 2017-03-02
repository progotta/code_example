var express = require('express');
var Promise = require('bluebird');
var config = require('./config.json');
//var logger = require('./app/common/log'); // retuns logger and inits app logger configuation
var apiApp = require('./app/index');


if (process.env.NODE_ENV !== 'test') {
    var logger = require('./app/common/log'); // retuns logger and inits app logger configuation
} else {
    var logger = require('winston');
    logger.remove(logger.transports.Console);
}

var app = express();

// For Security
app.disable('x-powered-by'); 

app.get('/v1/api/term/:tid/longest-preview-media-url', function(req, res) {
    logger.log('debug', 'app.js longest-preview-media-url params', req.params );
     
    var apiResponse = function() {
        return new Promise
            .resolve()
            .then(function() {
                return apiApp(req.params.tid); //26681
            })
            .then(function(response) {
                logger.info('app.js longest-preview-media-url response', response );
                res.json(response);
            })
            .catch(Error, (error) => {
                logger.error('app.js longest-preview-media-url error', error );
                res.status(500).json({ error: "500: Internal Server Error" });
            });
    }();

//    apiApp(req.params.tid, res.json.bind(res)); //26681

});

// Default 404
app.use(function (req, res, next) {
    logger.error('404: Not Found', req.url );
    res.status(404).json({ error: "404: Not Found" });
})

var port = process.env.PORT || config.port;

// start server
app.listen(port);

console.log('Server listening on Port ' + port);

module.exports = app;
