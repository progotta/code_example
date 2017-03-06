'use strict';
var logger = require('winston');
var Promise = require('bluebird');

var fs = Promise.promisifyAll(require('fs'));
const request = require('request');

const apiRequest = function(options) {

    var reqOptions = options.reqOptions; 
    var reqConfig = options.reqConfig;
    var requestType = reqConfig.requestType; // "MOCK" or "REAL"
    var mockDataPath = reqConfig.mockDataPath; // a path to the file

    if(requestType=="MOCK") {
        return fs.readFileAsync(mockDataPath)
                .then(JSON.parse)
                .then(function (result) {
                    return result;
        })
        .catch(Error, (error) => {
            // pass the error on
            throw error;
        });
    } else if(requestType=="REAL") {
         return new Promise(function(resolve, reject) {
            return request(reqOptions, function (error, response, body){
                if(response.statusCode === 200 && body) {
                    resolve(JSON.parse(body));
                } else {
                    reject('Status Code Not 200' + response );  // Basic
                }
            });

        }).catch(Error, (error) => {
                    // pass the error on
                    throw error;
        });
    }
}

module.exports = apiRequest;
