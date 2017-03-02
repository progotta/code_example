var logger = require('winston');
const request = require('request');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));           
            
const apiRequest = function (options) {

    var reqOptions = options.reqOptions; 
    var reqConfig = options.reqConfig;
    var requestType = reqConfig.requestType; // "MOCK" or "REAL"
    var mockDataPath = reqConfig.mockDataPath;
    // if request type = Mock, need to pass a path to the file

    if(requestType=="MOCK") {
        logger.info('apiRequest: Getting MOCK Data...', reqOptions );
        return new Promise
            .resolve()
            .then(function() {
                return fs.readFileAsync(mockDataPath);
            })
            .then(function(response) {
                return JSON.parse(response);
            });
    } else if(requestType=="REAL") {
        return new Promise(function(resolve, reject) {
            logger.info('apiRequest: Getting REAL Data...', reqOptions );
            return request(reqOptions, function (error, response, body){
                if(response.statusCode === 200 && body) {
                    resolve(JSON.parse(body));
                } else {
                    // houston we have a problem
                    reject(error);
                }
            });

        });
    }
/*
    if(requestType=="MOCK") {
        return Promise
            .resolve()
            .bind(this)
            .then(function() {
                logger.info('apiRequest: Getting Mock Data...' );
                return fs.readFileAsync(mockDataPath);
            })
            .then(function(response) {
                response = JSON.parse(response);
 //               logger.info('apiRequest: Response:', response );
                return response;
        });
    } else if(requestType=="REAL") {


        return new Promise(function(resolve, reject) {
            logger.info('apiRequest: Getting Mock Data...' );
            console.log(reqOptions);

if(requestType=="MOCK") {
            resolve(JSON.parse(body));
            return fs.readFileAsync(mockDataPath)
            .then();

} else if(requestType=="REAL") {

            return request(reqOptions, function (error, response, body){
                if(response.statusCode === 200 && body) {
                    console.log('status code 200' + body);
                    resolve(JSON.parse(body));
                } else {
                    // houston we have a problem
                    reject(error);
                }
            });

        });
    }
*/

/*        
        return Promise
            .resolve()
            .bind(this)
            .then(function() {
                return request(reqOptions);
            })
            .then(function(response) {
                logger.info('apiRequest: Getting Real Data... Response:', response );
            })
*/
/*
                logger.info('apiRequest: Getting Real Data...' );
                request(reqOptions, function (error, response, body) {
                    if (error) { return reject(error); }

                    if (response.statusCode === 200 && body) {
                        // resolve(body);
                        response = JSON.parse(body);
//                        logger.info('apiRequest: Response:', response );
                        return response;
                    }

                })

        };
*/    
 }

module.exports = apiRequest;

/*
               logger.info('apiRequest: Getting Real Data...' );
                request(reqOptions, function (error, response, body) {
                    if (error) { return reject(error); }

                    if (response.statusCode === 200 && body) {
                        // resolve(body);
                        response = JSON.parse(body);
//                        logger.info('apiRequest: Response:', response );
                        return response;
*/