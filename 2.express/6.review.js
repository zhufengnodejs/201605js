var express = require('express');
var path = require('path');
//app其实是一个监听函数
var app = express();
//设置模板的存放目录 是一个绝对路径
app.set('views',path.join(__dirname,'views'));
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.locals.label = '珠峰培训';
    next();
});

// get 请求的方法 path是路径 请求的pathname
app.get('/',function(req,res){
    //render负责渲染模板 第一个参数是模板的相对路径
    res.render('home.ejs',{title:'主页'});
});
app.get('/user',function(req,res){
    res.render('user.ejs',{title:'用户页',label:'珠峰用户'});
});


app.listen(9090);