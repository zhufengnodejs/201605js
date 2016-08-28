//先得到ws服务器的构造函数
var Server = require('ws').Server;
//创建一个服务器的实例
var server = new Server({
    port:8080
});
//监听客户端的请求
//回调函数中有socket参数，用来表示跟客户端的连接对象
//在服务器端通过socket对象来监听客户端的消息，也可以向客户端发消息
server.on('connection',function(socket){
   socket.on('message',function(msg){
       console.log(msg);
       socket.send("服务器说:客户端你好");
   });
});