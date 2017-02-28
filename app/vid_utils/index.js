exports.getVocabByTid = require('./getVocabByTid');
exports.getTermsByTid = require('./getTermsByTid');
exports.getTitleFromTitles = require('./getTitleFromTitles');
exports.getMediaNidFromTitle = require('./getMediaNidFromTitle');
exports.getMediaByNid = require('./getMediabyNid');

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
    var returnObj = {};
    returnObj.bcHLS = this.results.mediaObj.mediaUrls.bcHLS;
    returnObj.titleNid = this.results.selTitleObj.nid;
    returnObj.previewNid = this.results.selTitleObj.preview.nid;
    returnObj.previewDuration = this.results.selTitleObj.preview.duration;

    return returnObj;

}
