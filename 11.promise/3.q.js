//这是一个js版的promise实现
var Q = require('./q');
var fs = require('fs');
function readFile(filename){
  //得到一个延迟对象
  var defer = Q.defer();
  fs.readFile(filename,'utf8',function(err,content){
        if(err){
            defer.reject(err);//失败的话调用失败的回调
        }else{
            defer.resolve(content);//成功的话调用成功的回调
        }
  });
    return defer.promise;
}
readFile('./1.txt').then(function(data){
    console.log(data);
})