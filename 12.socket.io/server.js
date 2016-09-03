var express = require('express');
// npm install express socket.io --save
var path = require('path');
var http = require('http');
var app = express();
//当客户端访问根目录的时候执行回应的回调函数
app.get('/', function (req, res) {
    //访问哪个目录下面的文件，并发送到客户端
    // __dirname是当前工作目录
    //path must be absolute or specify root to res.sendFile
    //路径必须是一个绝对路径
    //res.sendFile(path.resolve('./index.html'));
    //也可以是一个相对路径，但需要指定root目录
    res.sendFile('./index.html', {root: __dirname});
    //res.sendfile('./index.html');
});
//app其实是一个监听函数  socket.io是依赖地http协议实现握手的
var server = http.createServer(app);
//使用socket.io构建一个io实例，把http server作为参数传进去
var io = require('socket.io')(server);
//服务器监听客户端的请求 socket是服务器与客户端通信的对象
io.on('connection',function(socket){
    // send方法是向对方发消息
   socket.send('欢迎来到珠峰聊天室');
    //在服务器监听 客户端发过来的消息
   socket.on('message',function(msg){
        console.log(msg);
   });
});
// http://localhost:9090/
// app.listen(9090);
server.listen(9090);


