process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = require('chai').expect;
var assert = require('assert');
var should = chai.should();
var getVocabByTid = require('../../../app/vid_utils').getVocabByTid;

it('should return vocab data object', function() {
  var result = getVocabByTid(26681);

  return result.then(function(data) {
//    expect(data).to.equal(blah);
    data.should.be.object;
    data.should.have.property('currentPage');
    data.should.have.property('totalCount');
    data.should.have.property('terms');
  });
});
