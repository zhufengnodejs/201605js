var express = require('express');
// npm install express socket.io --save
var path = require('path');
var http = require('http');
var app = express();
app.use(express.static(__dirname));
app.use(express.static(path.resolve('../node_modules')));
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
    var currentRooms = [];
    // send方法是向对方发消息
   //socket.send('欢迎来到珠峰聊天室');
   //socket.emit('message','欢迎来到珠峰聊天室');
    //在服务器监听 客户端发过来的消息
   socket.on('message',function(msg){
       //当收到客户端消息之后，要把此消息通知给所有人
       //就是通过广播的形式向所有连接到服务器并且没有断开的人发消息

       //广播的时候要判断此用户是否在某个房间内
       //如果此用户在大厅，则向所有的用户发消息，如果在某些房间内，则只向它所在的房间内发消息
       if(currentRooms.length>0){
           //向它所在的房间内发消息
           for(var i=0;i<currentRooms.length;i++){
               //向某个固定房间发消息
                io.in(currentRooms[i]).emit('message',msg);
           }
       }else{//如果不在任何一个房间内，则向所有用户发消息
           io.emit('message',msg);
       }

   });
   //监听客户端的join事件,同一个socket可以同时加入多个房间
   socket.on('join',function(roomName){
       //让此socket加入到某个房间内
       socket.join(roomName);
       //先判断现在此用户是否在此房间内
       var index = currentRooms.indexOf(roomName);
       if(index == -1)//不在房间内则加入此房间，如果在此房间内不做处理
        currentRooms.push(roomName);
   });
   //监听客户端离开房间的事件
   socket.on('leave',function(roomName){
       //先让socket离开房间
       socket.leave(roomName);
       //过滤掉要离开的那个房间
       currentRooms = currentRooms.filter(function(room){
           return room != roomName;
       });
   });
});
// http://localhost:9090/
// app.listen(9090);
server.listen(9090);


