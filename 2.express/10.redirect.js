var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
//设置模板引擎
app.set('view engine','html');
//设置所有模板的存放目录
app.set('views',path.resolve('views'));
//对于html类型的模板，使用ejs的渲染方法
app.engine('html',require('ejs').__express);
//使用bodyparser中间件，会把请求体转成对象放在 req.body上
/*app.use(function(req,res,next){
   //把请求体转成req.body
   //要根据请求体的类型调用不同的转换方法 key=value , {key:value}
});*/
app.use(bodyParser.urlencoded());
/*app.use(function(req,res,next){
   //重定向
   res.redirect = function(url){
      //设置响应码为302
      res.statusCode = 302;
      //设置响应头 设置新的地址
      res.setHeader('Location',url);
      res.end('');
   }
   next();
});*/
app.get('/',function(req,res){
   res.render('home');
});
app.get('/login',function(req,res){
   res.render('login');
});
app.post('/login',function(req,res){
   //从请求体中取得请求对象
   var user = req.body;
   //如果用户名和密码都正确
   if(user.username =='admin' && user.password == 'admin'){
      //登陆成功之后写一个cookie
      res.cookie('username',user.username);
      //重定向就是告诉 客户端向新的地址发起请求
      res.redirect('/user')
   }else{
      res.redirect('back');
   }
});
app.get('/user',function(req,res){
   res.render('user',{username:req.cookies.username});
});

app.listen(9090);