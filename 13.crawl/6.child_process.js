var child_process = require('child_process');
// node sum.js
var child = child_process.spawn('node',['sum.js']);
//监听子进程的标准输出  如果子进程有输出就会触发data事件
child.stdout.on('data',function(data){
    console.log(data.toString());
});
//监听子进程的标准输出 如果子进程的标准输出结束了，会触发end事件
child.stdout.on('end',function(){
    console.log('end');
});
child.on('exit',function(){
    console.log('子进程已经退出');
});
setInterval(function(){
    console.log(new Date().toLocaleString());
},100);