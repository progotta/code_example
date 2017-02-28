const request = require('request');
var Promise = require('bluebird');            
            
const apiRequest = function (url) {

    var options = {
        url: url,  
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };
    
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) { return reject(error); }

            if (response.statusCode === 200 && body) {
                resolve(body);
            }
        })
    })
        
 }
module.exports = apiRequest;