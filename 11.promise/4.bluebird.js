//最常用的就是blurbird
var Promise = require('bluebird');
var fs = require('fs');
//把一个异步方法转成一个promise方法
var readFileAsync = Promise.promisify(fs.readFile);
//把一个对象上所有的异步方法全部转成promise方法
var fs = Promise.promisifyAll(fs);
console.log(fs);
//fs.readFile('./1.txt','utf8',function(err,data){

//});
/*readFileAsync('./1.txt', 'utf8').then(function (data) {
    console.log(data);
});*/


