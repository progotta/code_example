process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


it('should error 404 GET', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(404);
      done();
    });
});

it('should return fully formed JSON response GET', function(done) {
  chai.request(server)
    .get('/v1/api/term/26681/longest-preview-media-url')
    .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('bcHLS');
        res.body.should.have.property('titleNid');
        res.body.should.have.property('previewNid');
        res.body.should.have.property('previewDuration');
      done();
    });
});

/*
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
*/