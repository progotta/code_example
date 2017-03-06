'use strict';
var logger = require('winston');
var Promise = require('bluebird');
var vidUtils = require('./vid_utils');

const apiApp = function(initTid){
    var initTid = initTid;
    var getLongestPreviewMediaUrl = Promise.coroutine(function* () {
        try {
            var passedInTid = initTid; //26681
            var indexId = 0;  // this is manually selected in the challenge
            var selTitleMethod = "LONGEST_PREVIEW"; // should be constant or config 
            var retTitleMediaType = "PREVIEW"; // should be constant or config

            var vocabObjByTid = yield Promise.resolve(vidUtils.getVocabByTid(passedInTid));
            var vocabTid = yield Promise.resolve(vidUtils.getVocabTidByIndex(vocabObjByTid, indexId)); // not async
            var termObj = yield Promise.resolve(vidUtils.getTermsByTid(vocabTid));
            var titlesObj = yield Promise.resolve(vidUtils.getTitlesFromTerms(termObj));
            var titleObj = yield Promise.resolve(vidUtils.getTitleFromTitles(titlesObj, selTitleMethod));
            var mediaNid = yield Promise.resolve(vidUtils.getMediaNidFromTitle(titleObj, retTitleMediaType));
            var mediaObj = yield Promise.resolve(vidUtils.getMediaByNid(mediaNid));
            // pass in an object with the titleObj and the mediaObj
            var dataObj = { mediaObj, titleObj }; // this could be es6 ver depenedent
            var responseObj = yield Promise.resolve(vidUtils.buildResponseObj(dataObj));
   
            return responseObj;

        } catch(error) {
            //log error, then rethrow
            throw error;
        }
    });
    return getLongestPreviewMediaUrl();

}

module.exports = apiApp;




