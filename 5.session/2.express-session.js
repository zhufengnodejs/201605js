var express = require('express');
var path = require('path');
//express的session中间件
var session = require('express-session');
var app = express();
//设置模板的存放目录
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.use(session({
    secret:'zfpx',//提供cookie加密的
    resave:true,//每次请求都重新保存session
    saveUninitialized:true//保存未初始化的session
}));
//显示空白的登陆表单
app.get('/login',function(req,res){
  res.render('login',{});
});
//以post的方式提交表单
app.post('/login',function(req,res){

});
//用户主页面
app.get('/user',function(req,res){
    res.render('user',{});
});

app.listen(9090);