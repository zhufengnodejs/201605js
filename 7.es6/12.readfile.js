/**
 * 1. 读取1.txt,得到1.txt文件内容是第二个文件的文件名
 * 2. 再读取第二个文件，得到第二个文件的文件内容，
 */
var fs = require('fs');
/*
//同步的代码很好阅读，但是性能非常差
var file1 = fs.readFileSync('./1.txt','utf8');
var file2 = fs.readFileSync(file1,'utf8');
var file3 = fs.readFileSync(file2,'utf8');
console.log(file3);
//异步代码性能非常好，但是阅读起来非常差
fs.readFile('./1.txt','utf8',function(err,file1){
    fs.readFile(file1,'utf8',function(err,file2){
        fs.readFile(file2,'utf8',function(err,file3){
            console.log(file3);
        })
    })
})
*/


var file1 = fs.readFile('./1.txt','utf8');
var file2 = fs.readFile(file1,'utf8');
var file3 = fs.readFile(file2,'utf8');
console.log(file3);