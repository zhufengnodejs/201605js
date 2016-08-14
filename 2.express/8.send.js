var express = require('express');
const STATUS_CODES = require('_http_server').STATUS_CODES;
var app = express();
app.use(function(req,res,next){
   res.send = function(msg){
     if(typeof msg == 'string' || Buffer.isBuffer(msg)){
         res.setHeader('Content-Type','text/html;charset=utf-8');//设置响应头 内容类型为html,编码utf-8
         res.end(msg);//结束响应
     }else if(typeof msg == 'object'){
         res.setHeader('Content-Type','application/json;charset=utf-8');
         res.end(JSON.string(msg));
     }else if(typeof msg == 'number'){
         res.statusCode = msg;
         res.end(STATUS_CODES[msg]);
     }
   }
    next();
});
app.get('/',function(req,res){
    //1. 使用send 可以解决乱码问题
    res.send('首页');
});
//First argument must be a string or Buffer
app.get('/user',function(req,res){
    //1. 使用send 可以接收对象
    res.send({id:1,name:'zfpx',age:8});
});
app.get('/users',function(req,res){
    //1. 使用send 可以接收对象
    res.send([{id:1,name:'zfpx',age:8}]);
});
app.get('*',function(req,res){
    //1. 使用send 可以接收数字，会把数字当成状态码来处理
    //  状态码=404 返回的响应体=此状态码对应的原因短语
    res.send(404);
});

app.listen(9090);