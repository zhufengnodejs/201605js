var express = require('express');
var querystring = require('querystring');
var app = express();
var cookieParser = require('cookie-parser');
//使用此中间件之后才有req.cookies属性
app.use(function(req,res,next){
  //var cookie = req.header.cookie;// name=zfpx; age=8
  req.cookies =  querystring.parse(req.header.cookie,'; ');
  next();
});
//当使用express之后，res.cookie
app.get('/write',function(req,res){
  //domain指定下次向哪个服务器发请求的时候要发送此cookie
  //res.cookie('name','zfpx',{domain:'a.zfpx.cn'});

  //设置下次向哪个路径的时候发送此cookie
  //res.cookie('name','zfpx',{path:'/read'});

   //设置cookie的有效期 过期时间
  //res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
    //设置cookie的倒计时时间
  //res.cookie('name','zfpx',{maxAge:20*1000});
 //   res.cookie('name','zfpx');
  res.send('写入cookie');
});

app.get('/read',function(req,res){
 res.send(req.cookies);
});
app.get('/read2',function(req,res){
 res.send(req.cookies);
});

//统计此用户访问了多少次服务器
app.get('/visit',function(req,res){
   //var cookie = req.headers.cookie;// visit=1
   //当使用了cookieParser之后，会增加req.cookies的属性 {visit:1}
    var cookies = req.cookies;
    //如果cookies中有此属性，表示是老顾客，以前来过
    var xxx = cookies.xxx;
    if(xxx){// 如果是老顾客，则让访问次数在原来基础上加1
       xxx = parseInt(xxx)+1;
    }else{//如果没有此属性，意味着第一次，或者卡丢了 设置为1
        xxx = 1;
    }
    //不管是新朋友还是老朋友，都要把最新的visit值写回到客户端
    //设置了httpOnly=true之后浏览器就不能通过js来操作cookie
    res.cookie('xxx',xxx,{httpOnly:true});
    res.send('这是你的第'+xxx+'次访问');
});

app.listen(9090);