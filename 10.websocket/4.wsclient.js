var Socket = require('ws');
//创建一个连接服务器8080端口的客户端
var socket = new Socket('ws://localhost:8080');
//监听与服务器成功建立连接的事件
socket.on('open',function(){
    console.log('open');
    //send是向服务器发消息
    socket.send('服务器你好');
});
//监听服务器发过来的消息
socket.on('message',function(msg){
    console.log(msg);
});