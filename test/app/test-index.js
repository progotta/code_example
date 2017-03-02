process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = require('chai').expect;
var assert = require('assert');
var should = chai.should();
var apiApp = require('../../app/index');



it('should return Obj from promise chain', function() {
  var result = apiApp(26681);

  return result.then(function(data) {
//    expect(data).to.equal(blah);
    data.should.be.object;
    data.should.have.property('bcHLS');
    data.should.have.property('titleNid');
    data.should.have.property('previewNid');
    data.should.have.property('previewDuration');
  });
});

/*
describe('apiApp', function() {
  it('should add class to element');
  it('should not add a class which already exists');
});
*/


