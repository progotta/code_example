var logger = require('winston');
var Promise = require('bluebird');
var apiRequest = require('../common/apiRequest');
var config = require('../config');

exports.getTitleFromTitles = require('./getTitleFromTitles');
exports.getMediaNidFromTitle = require('./getMediaNidFromTitle');


function buildconfig(id, endpoint) {
    var apiReqConf = {};

    // build a configuration object
    var endPointConfig = config.extApiEndPoints.endPoints[endpoint];
    var extApiConfig = config.extApiEndPoints[endPointConfig.requestSettings];
    extApiConfig.url = endPointConfig.url + id;
    apiReqConf.reqOptions = extApiConfig;
    apiReqConf.reqConfig = endPointConfig;

    return apiReqConf;
}

exports.getVocabByTid = function(tid) {
    
    var tid = tid || this.options.initTid; // need to not get from options somehow
    var apiReqConf = buildconfig(tid,'vocabMeta');
    logger.info('vid_utils/index.js:getVocabByTid apiReqConf:', apiReqConf );

    return Promise
        .resolve()
        .bind(this)
        .then(function() {
            return apiRequest(apiReqConf);
        })
        .then(function(result) {
            this.results.vocabObj = result;
            return result;
        });

/*
    return new Promise((resolve, reject) => {
        var result = apiRequest(apiReqConf);
        this.results.vocabObj = result
        resolve(result)
//        return this.results.vocabObj = result; 

 //       someModule(param, (result, error) => {
 //           if (error) { reject(error); }
 //           else { resolve(result); }
 //       });
    });
*/

}

exports.getTermsByTid = function(tid) {

    var apiReqConf = buildconfig(tid,'termsMeta');
    logger.info('vid_utils/index.js:getTermsByTid apiReqConf:', apiReqConf );

    return Promise
        .resolve()
        .bind(this)
        .then(function() {
            return apiRequest(apiReqConf);
        })
        .then(function(result) {
            this.results.termsObj = result;
            return result;
        });

}

exports.getMediaByNid = function(nid) {

    var apiReqConf = buildconfig(nid,'mediaMeta');
    logger.info('vid_utils/index.js:getMediaByNid apiReqConf:', apiReqConf );

    return Promise
        .resolve()
        .bind(this)
        .then(function() {
            return apiRequest(apiReqConf);
        })
        .then(function(result) {
            this.results.mediaObj = result;
            return result;
        });

/*
    return new Promise((resolve, reject) => {
        var result = apiRequest(apiReqConf);
        this.results.mediaObj = result
        resolve(result)
    });
*/
}

exports.getVocabTidByIndex = function(vocab) {
    // index is passed in from state obj
    const vocabIndex = this.options.vocabIndex || 0;

    // need to do sufficient checking for obj and property
    return vocab.terms[vocabIndex].tid;
}

exports.getTitlesFromTerms = function(terms) {
    // need logic to test this
    const titles = terms.titles;
    return titles;
}

exports.buildResponseObj = function() {
    //assumes fully built state object 
    logger.info('vid_utils/index.js:buildResponseObj: ', this.results.vocabObj );

    var returnObj = {};
    returnObj.bcHLS = this.results.mediaObj.mediaUrls.bcHLS;
    returnObj.titleNid = this.results.selTitleObj.nid;
    returnObj.previewNid = this.results.selTitleObj.preview.nid;
    returnObj.previewDuration = this.results.selTitleObj.preview.duration;

    return returnObj;

}
