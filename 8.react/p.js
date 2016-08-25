var fs = require('fs');
var Promise = require('./Promise');
function read(filename){
    //Promise是一个原生对象 resolve成功之后调用 reject失败之后调用
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
           if(err){
               reject(err);//如果出错调用成功的回调
           }else{
               resolve(data);//如果成功调用成功之后的回调
           }
        })
    })
}
//then相当于注册了成功的回调和失败的回调
read('./1.txt')
.then(function(data){
    console.log(data);
},function(err){
    console.error(err);
})