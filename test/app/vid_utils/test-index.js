process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = require('chai').expect;
var assert = require('assert');
var should = chai.should();
var vidUtils = require('../../../app/vid_utils');


describe('vid utility functions', function() {

 
    before(function() {
        // setup the context/stateObj
//        stateObj = vidUtils.buildStateObj({ initTid: 26681 });
//        options = stateObj.options;
//        results = stateObj.results;
        
//        this.someVal = 0;
    });

    it('should return valid vocab data object', function() {
        var vocabObj = vidUtils.getVocabByTid(26681);

        return result.then(function(data) {
        //    expect(data).to.equal(blah);
            data.should.be.object;
            data.should.have.property('currentPage');
            data.should.have.property('totalCount');
            data.should.have.property('terms');
        });
    });

    it('should return valid term data object', function() {
        var result = vidUtils.getTermsByTid(26686);

        return result.then(function(data) {
        //    expect(data).to.equal(blah);
            data.should.be.object;
            data.should.have.property('currentPage');
            data.should.have.property('totalCount');
            data.should.have.property('term');
            data.should.have.property('titles');
            data.titles.should.be.array;
        });
    })

    it('should return valid media object', function() {
        var result = vidUtils.getMediaByNid(41096);

        return result.then(function(data) {
        //    expect(data).to.equal(blah);
            data.should.be.object;
            data.should.have.property('mediaUrls');
            data.mediaUrls.should.be.object;
            data.mediaUrls.should.have.property('bcHLS');
            data.mediaUrls.should.be.string;
        });
    })

});


