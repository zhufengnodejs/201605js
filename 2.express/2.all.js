//引入express,返回值是一个函数
var express = require('./lsp');
//调用此函数还会返回一个函数
var app = express();
/**
 * 如何发非get请求，有两个方法
 * 1. chrome postman插件
 * 2. curl -X POST http://localhost:9090/user
 * 3. curl -X DELETE http://localhost:9090/user
 */
//不管方法名是什么，只要访问的路径是/user,那么返回user
app.all('/user',function(req,res){
    res.end('user');
});


//启动一个http的web服务器，监听9090端口
app.listen(9090);
//app其实就是一个监听函数，就是当客户端连接上来的时候执行的回调函数
//require('http').createServer(app).listen(9090);