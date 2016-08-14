var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
//使用此中间件之后才有req.cookies属性
app.use(cookieParser());
//当使用express之后，res.cookie
app.get('/write',function(req,res){
  res.cookie('name','zfpx');
  res.cookie('age','8');
  res.send('写入cookie');
});

app.get('/read',function(req,res){
 var cookie = req.headers.cookie;
 res.send(cookie);
});

//统计此用户访问了多少次服务器
app.get('/visit',function(req,res){
   //var cookie = req.headers.cookie;// visit=1
   //当使用了cookieParser之后，会增加req.cookies的属性 {visit:1}
    var cookies = req.cookies;
    //如果cookies中有此属性，表示是老顾客，以前来过
    var visit = cookies.visit;
    if(visit){// 如果是老顾客，则让访问次数在原来基础上加1
       visit = parseInt(visit)+1;
    }else{//如果没有此属性，意味着第一次，或者卡丢了 设置为1
        visit = 1;
    }
    //不管是新朋友还是老朋友，都要把最新的visit值写回到客户端
    res.cookie('visit',visit);
    res.send('这是你的第'+visit+'次访问');
});

app.listen(9090);