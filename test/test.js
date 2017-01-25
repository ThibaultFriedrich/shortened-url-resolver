var shortenedUrlResolver = require('../index.js');
var expect = require('chai').expect;

describe('Short urls', function(){


    var urls = require('./urls.json');

    urls.forEach(function(url){
        it(url.name, function(done){
            shortenedUrlResolver(url.shortenedUrl, function(error, newUrl){
                expect(error).to.be.null;
                expect(newUrl).to.be.equal(url.url);
                done();
            });
        });

    });
});

describe('Not short urls', function(){

    it('google.fr', function(done){
        shortenedUrlResolver('https://www.google.fr', function(error, newUrl){
            expect(error).to.be.equal(200);
            done();
        });

    });
});
