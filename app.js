var express = require('express');

var config = require('./config.json');
var apiApp = require('./app/index');

var app = express();

// For Security
app.disable('x-powered-by'); 

// API Routes
//var router = express.Router();

app.get('/v1/api/term/:tid/longest-preview-media-url', function(req, res) {
    // pass the response object so it can get invoked in promise 
    apiApp(req.params.tid, res.json.bind(res)); //26681

});

// Default 404
app.use(function (req, res, next) {
  res.status(404).json({ error: "404: Not Found" })
})

var port = process.env.PORT || config.port;

// start server
app.listen(port);

console.log('Server listening on Port ' + port);
