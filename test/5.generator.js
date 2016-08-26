var co = require('./co');
var fs = require('fs');
function readFile(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
co(function* () {
    var one = yield readFile('1.txt');
    console.log(one);
    var two = yield readFile(one);
    console.log(two);
})