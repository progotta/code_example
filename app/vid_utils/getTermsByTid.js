var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var apiRequest = require('../common/apiRequest');

const getTermsByTid = function(tid){
    return Promise
        .resolve()
        //this was bound from the root promise chain.
        //because we are creating a new Promise chain, it needs to be rebound.
        .bind(this)
        .then(function() {
            termsUrl = this.options.termsURL + tid;
            //console.log('getTermsURL: ' + termsUrl);
            //return apiRequest(termsUrl);
            return fs.readFileAsync('./app/api_mock/term.json');
        })
        .then(function(response) {
            response = JSON.parse(response);
            // for testing I need to turn into a json obj
            return this.results.termObj = response;
        });
};

module.exports = getTermsByTid;
