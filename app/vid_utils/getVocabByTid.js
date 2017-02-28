var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var apiRequest = require('../common/apiRequest');

const getVocabByTid = function(){
    return Promise
        .resolve()
        //this was bound from the root promise chain.
        //because we are creating a new Promise chain, it needs to be rebound.
        .bind(this)
        .then(function() {
            vocabUrl = this.options.vocabURL + this.options.initTid;
            //console.log('getVocabURL: ' + vocabUrl);
            //return apiRequest(vocabUrl);
            return fs.readFileAsync('./app/api_mock/vocab.json');
        })
        .then(function(response) {
            // console.log('response: ' + JSON.stringify(response));
            response = JSON.parse(response);
            // for testing I need to turn into a json obj
            return this.results.vocabObj = response;
        });
};

module.exports = getVocabByTid;