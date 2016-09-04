var urls = ['http://localhost:9090/name', 'http://localhost:9090/age',
    'http://localhost:9090/home'];
var async = require('async');
var request = require('request');
var result = [];
async.forEach(urls, function (url, callback) {
   request(url,function(err,response,body){
       result.push(body);
       callback(err);
   })
}, function (err) {
    console.log(err);
    console.log(result);
})
