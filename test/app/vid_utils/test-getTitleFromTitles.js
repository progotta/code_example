process.env.NODE_ENV = 'test';

var chai = require('chai');
var expect = require('chai').expect;
var assert = require('assert');
var should = chai.should();
var vidUtils = require('../../../app/vid_utils');


describe('Get title obj from titles obj', function() {

    before(function() {
        // setup the Titles object
        var titles = null;
        var termsObj = vidUtils.getTermsByTid(26686);

        return termsObj.then(function(data) {
            titles = vidutils.getTitlesFromTerms(data);
            console.log(titles);
        });
    });
})