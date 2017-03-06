'use strict';
var logger = require('winston');
var Promise = require('bluebird');
var apiRequest = require('../common/apiRequest');
var config = require('../../config');

module.exports.getTitleFromTitles = require('./getTitleFromTitles');
module.exports.getMediaNidFromTitle = require('./getMediaNidFromTitle');


function buildconfig(id, endpoint) {
    try {
        var apiReqConf = {};
        // build a configuration object
        var endPointConfig = config.extApiEndPoints.endPoints[endpoint];
        var extApiConfig = config.extApiEndPoints[endPointConfig.requestSettings];
        extApiConfig.uri = endPointConfig.uri + id;
        apiReqConf.reqOptions = extApiConfig;
        apiReqConf.reqConfig = endPointConfig; // add a g
        return apiReqConf;
    } catch (error) {
        // pass the error on
        throw error;
    }
    
}

module.exports.getVocabByTid = function(tid) {

 //   var tid = tid || 26681; // need to not get from options somehow
    var apiReqConf = buildconfig(tid,'vocabMeta');
    var vocabObj = apiRequest(apiReqConf).then(function(result) {
                    return result;
                }).catch(Error, (error) => {
                    // pass the error on
                    throw error;
                });
    return vocabObj;
}

module.exports.getTermsByTid = function(tid) {
    var apiReqConf = buildconfig(tid,'termsMeta');
    var termsObj = apiRequest(apiReqConf).then(function(result) {
                    return result;
                }).catch(Error, (error) => {
                    // pass the error on
                    throw error;
                });
    return termsObj;

}

module.exports.getMediaByNid = function(nid) {
    var apiReqConf = buildconfig(nid,'mediaMeta');
    var mediaObj = apiRequest(apiReqConf).then(function(result) {
                    return result;
                }).catch(Error, (error) => {
                    // pass the error on
                    throw error;
                });
    return mediaObj;
}

module.exports.getVocabTidByIndex = function(vocab, indexId) {
    try{
        const vocabIndex = indexId;
        return vocab.terms[vocabIndex].tid;
    } catch (error) {
        // pass the error on
        throw error;
    }

}

module.exports.getTitlesFromTerms = function(terms) {
    // need logic to test this
    try{
        const titles = terms.titles;
        return titles;
    } catch (error) {
        // pass the error on
        throw error;
    }
}

module.exports.buildResponseObj = function(dataObj) {
    try{
        var returnObj = {};
        returnObj.bcHLS = dataObj.mediaObj.mediaUrls.bcHLS;
        returnObj.titleNid = dataObj.titleObj.nid;
        returnObj.previewNid = dataObj.titleObj.preview.nid;
        returnObj.previewDuration = dataObj.titleObj.preview.duration;
        
        return returnObj;
    } catch (error) {
        // pass the error on
        throw error;
    }

}
