var request = require('request');

function findTrueUrl(url, callback){
    request({
        method: 'GET',
        url: url,
        followRedirect: false
    }, function(error, response, body){
        
        callback && callback(error, response.headers['location']);
    });
}

module.exports = findTrueUrl;
