var Promise = require('bluebird');
var vidUtils = require('./vid_utils');

const apiApp = function(initTid, cb){
    // Setup THIS context within promise chain
    const stateObj = {
        options : {
            initTid : initTid,
            vocabIndex : 0,
            selTitleMethod : "LONGEST_PREVIEW",
            retTitleMediaType : "PREVIEW",
            vocabURL : "http://d6api.gaia.com/vocabulary/1/",
            termsURL : "http://d6api.gaia.com/videos/term/",
            mediaURL : "http://d6api.gaia.com/media/",
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
        }, 
        results : {
            vocabObj : null,
            termObj : null,
            mediaObj : null,
            selTitleObj : null,
            retunUrl : null,
            maxPreDuration : null,
            maxPreNid : null,
            maxTitleNid : null
        }
    };


    //root promise chain
    Promise
        .resolve()
        .bind(stateObj)
        .then(vidUtils.getVocabByTid)           // gets a vocab obj
        .then(vidUtils.getVocabTidByIndex)      // accepts a vocab obj and returns an id based on stateObj(this).options.vocabIndex
        .then(vidUtils.getTermsByTid)           // accepts a Tid and returns a terms obj
        .then(vidUtils.getTitlesFromTerms)      // accepts a terms obj and and returns the attached titles obj 
        .then(vidUtils.getTitleFromTitles)      // accepts a titles obj and returns the title object of the one with the longest preview
        .then(vidUtils.getMediaNidFromTitle)    // accepts a title obj and returns a mediaNid based on stateObj(this).options.retTitleMediaType
        .then(vidUtils.getMediaByNid)           // accepts Nid and returns a media obj
        .then(vidUtils.buildResponseObj)
        .then(cb)
        .catch(Error, (error) => {
            console.error(error);
        });

}

module.exports = apiApp;




