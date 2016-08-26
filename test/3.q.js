var Q = require('./q');
var fs = require('fs');
function read(filename) {
    var deferred = Q.defer();
    fs.readFile(filename,'utf8', function (err, data) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}

read('1.txt1').then(function(data){
    console.log(data);
    return data;
},function(error){
    console.error(error);
}).then(function(data){
    console.log(data);
});