var urls = ['/name','/age','/home'];
var async = require('async');
var request = require('request');
async.forEach(urls,function(url,callback){

},function(err,result){
    console.log(result);
})
