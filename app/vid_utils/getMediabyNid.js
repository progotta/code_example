var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var apiRequest = require('../common/apiRequest');

const getMediaByNid = function(nid){
    return Promise
        .resolve()
        //this was bound from the root promise chain.
        //because we are creating a new Promise chain, it needs to be rebound.
        .bind(this)
        .then(function() {
            mediaUrl = this.options.mediaURL + nid;
            //console.log('getMediaURL: ' + mediaUrl);
            //return apiRequest(mediaUrl);
            return fs.readFileAsync('./app/api_mock/media.json');
        })
        .then(function(response) {
            response = JSON.parse(response);
            // for testing I need to turn into a json obj
            //console.log(response);
            return this.results.mediaObj = response;
        });
};

module.exports = getMediaByNid;