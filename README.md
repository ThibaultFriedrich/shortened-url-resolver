# shortened-url-resolver [![Build Status](https://travis-ci.org/thibaultfriedrich/shortened-url-resolver.svg?branch=master)](https://travis-ci.org/thibaultfriedrich/shortened-url-resolver) 

Find final url from shortened url.

## How to install ?

```bash
npm install shortened-url-resolver --save
```

## Easy to use

```javascript
var shortenedUrlResolver = require('shortened-url-resolver');
shortenedUrlResolver('http://bit.ly/1pfckwC', function(error, finalUrl){
    if(error){
        console.log(error); // if url is inaccessible or not shortened
    } else {
        console.log(finalUrl); // finalUrl == https://github.com/ThibaultFriedrich/shortened-url-resolver
    }
});
```

## Services tested

For now, I have only been tested following services :

* goo.gl
* bit.ly
* ow.ly
* ift.tt
* tinyurl.com
* dlvr.it
* nr.tn

**Let me know if some others also work.**
