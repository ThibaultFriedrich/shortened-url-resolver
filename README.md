# url-resolver

Find final url from short url. 

## How to install ?

    npm install url-resolver --save

## Easy to use

    var urlResolver = require('url-resolver');
    urlResolver('http://bit.ly/1SY2yXL', function(error, finalUrl){
        if(error){
            console.log(error); // if url is inaccessible or not shortened
        } else {
            console.log(finalUrl); // finalUrl == https://github.com/ThibaultFriedrich/url-resolver
        }
    });

## Services tested 

For now, I have only tested services : 

* goo.gl
* bit.ly
* ow.ly
* ift.tt
* tinyurl.com
