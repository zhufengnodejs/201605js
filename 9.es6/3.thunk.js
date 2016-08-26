/**
 * 1. 先读1.txt,它的内容是第二个文件的文件名
 * 2. 再读第二个文件，它的内容是第三个文件的文件名
 * 3. 再读第三个文件，并打印出来
 **/
//同步式IO的写法 容易阅读 阻塞主线程，性能非常差
var fs = require('fs');
/*
var file2 = fs.readFileSync('./1.txt','utf8');
var file3 = fs.readFileSync(file2,'utf8');
var content = fs.readFileSync(file3,'utf8');
console.log(content);*/
//优点是性能高 缺点是不易阅读，可读性非常差
/*fs.readFile('./1.txt','utf8',function(err,file2){
    fs.readFile(file2,'utf8',function(err,file3){
        fs.readFile(file3,'utf8',function(err,file3content){
            console.log(file3content);
        });
    });
});*/

function readFile(filename){
   return function(next){
      fs.readFile(filename,'utf8',function(err,data){
           next(data);
       })
   }
}
function* read(){
    var file2 = yield readFile('./1.txt');
    var file3 = yield readFile(file2);
    var content = yield readFile(file3);
    console.log(content);
}
//是一个让生成器自动执行完毕的函数
co(read);
//接收一个生成器函数
function co(gene){
//生成一个迭代器
    var it = gene();
//封装了一个自己的next函数
    function callback(data){
        //在调用下一个next的时候入上一个文件的内容，则意味着data传递给上一个yield返回值
        var result = it.next(data);
        if(!result.done){
            result.value(callback);
        }
    }
    callback();
}



