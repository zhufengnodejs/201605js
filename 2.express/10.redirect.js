var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//设置模板引擎
app.set('view engine','html');
//设置所有模板的存放目录
app.set('views',path.resolve('views'));
//对于html类型的模板，使用ejs的渲染方法
app.engine('html',require('ejs').__express);
//使用bodyparser中间件，会把请求体转成对象放在 req.body上
app.use(bodyParser.urlencoded());
app.use(function(req,res,next){
   //重定向
   res.redirect = function(url){
      //设置响应码为302
      res.statusCode = 302;
      //设置响应头 设置新的地址
      res.setHeader('Location',url);
      res.end('');
   }
   next();
});
app.get('/',function(req,res){
   res.render('home');
});
app.get('/login',function(req,res){
   res.render('login');
});
app.post('/login',function(req,res){
   var user = req.body;
   //如果用户名和密码都正确
   if(user.username =='admin' && user.password == 'admin'){
      //重定向就是告诉 客户端向新的地址发起请求
      res.redirect('/user')
   }else{
      res.redirect('back');
   }
});
app.get('/user',function(req,res){
   res.render('user');
});

app.listen(9090);