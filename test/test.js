var shortenedUrlResolver = require('../index.js');
var expect = require('chai').expect;

describe('Short urls', function(){
    it('bit.ly', function(done){
        shortenedUrlResolver('http://bit.ly/1Sd9m5Z', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('https://app.brazenconnect.com/events/sans-cybertalent-fair-may2016?&jobAlias=issa&variant=socialmedia');
            done();
        });
    });
    it('ow.ly', function(done){
        shortenedUrlResolver('http://ow.ly/4mPP5S', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('http://www.darkreading.com/endpoint/8-active-apt-groups-to-watch/d/d-id/1325161');
            done();
        });
    });
    it('goo.gl', function(done){
        shortenedUrlResolver('http://goo.gl/alerts/4JGvW', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('https://www.washingtonpost.com/news/the-switch/wp/2016/04/19/box-ceo-why-the-latest-attempt-by-congress-on-cybersecurity-is-already-outdated/');
            done();
        });
    });
    it('ift.tt', function(done){
        shortenedUrlResolver('http://ift.tt/20UZLod', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('http://www.isaca.org/About-ISACA/Press-room/News-Releases/2016/Pages/ISACA-New-Cybersecurity-Boot-Camp-Coming-to-New-York.aspx');
            done();
        });
    });
    it('tinyurl.com', function(done){
        shortenedUrlResolver('http://tinyurl.com/KindleWireless', function(error, newUrl){
            expect(error).to.be.null;
            expect(newUrl).to.be.equal('http://www.amazon.com/Kindle-Wireless-Reading-Display-Globally/dp/B003FSUDM4/ref=amb_link_353259562_2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-10&pf_rd_r=11EYKTN682A79T370AM3&pf_rd_t=201&pf_rd_p=1270985982&pf_rd_i=B002Y27P3M');
            done();
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

