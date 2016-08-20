var express = require('express');
var path = require('path');
//express的session中间件
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
//设置模板的存放目录
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',require('ejs').__express);
// extended=true 用querystring把字符串转成对象，=false用bodyparser自带的转换函数转换
app.use(bodyParser.urlencoded({extended:true}));
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
    //获取请求体，并判断用户名和密码是否正确
    var user = req.body;
    if(user.username == 'admin' && user.password == 'admin'){
        //它就代表此客户端在服务器端对应的数据对象
        req.session.username = user.username;
        res.redirect('/user');
    }else{
        res.redirect('back');
    }
});
//用户主页面
app.get('/user',function(req,res){
    res.render('user',{username:req.session.username});
});

app.listen(9090);