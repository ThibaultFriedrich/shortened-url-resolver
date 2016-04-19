var urlResolver = require('../url-resolver');
var expect = require('chai').expect;

describe('Shorter urls', function(){
    it('bit.ly', function(done){
        urlResolver('http://bit.ly/1Sd9m5Z', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('https://app.brazenconnect.com/events/sans-cybertalent-fair-may2016?&jobAlias=issa&variant=socialmedia');
            done();
        });
    });
    it('ow.ly', function(done){
        urlResolver('http://ow.ly/4mPP5S', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('http://www.darkreading.com/endpoint/8-active-apt-groups-to-watch/d/d-id/1325161');
            done();
        });
    });
    it('goo.gl', function(done){
        urlResolver('http://goo.gl/alerts/4JGvW', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('https://www.washingtonpost.com/news/the-switch/wp/2016/04/19/box-ceo-why-the-latest-attempt-by-congress-on-cybersecurity-is-already-outdated/');
            done();
        });
    });
    it('ift.tt', function(done){
        urlResolver('http://ift.tt/20UZLod', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('http://www.isaca.org/About-ISACA/Press-room/News-Releases/2016/Pages/ISACA-New-Cybersecurity-Boot-Camp-Coming-to-New-York.aspx');
            done();
        });
    });
});

