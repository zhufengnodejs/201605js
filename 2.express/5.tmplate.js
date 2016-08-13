var express = require('express');
//var express = require('./express_tmpl');
var path = require('path');
var fs = require('fs');
var app = express();
//设置一个变量保存在app内部 设置模板引擎
app.set('view engine','ejs');
//设置模板的存放目录
app.set('views',path.join(__dirname,'views'));
app.use(function(req,res,next){
    //其实最终渲染模板的对象是res.locals+render的第二个参数
    res.locals.website = '珠峰';
    next();
});
//添加render方法
/**
 * 1. 把模板从硬盘上读出来,读取内存里，是字符串格式。
 * 2. 把模板里的变量用数据对象里的属性替换掉
 * 3. 替换完成后发回给浏览器或客户端
 */
app.get('/user',function(req,res){
    //使用数据对象渲染模板
    // 第1个参数是模板相对路径
    // 第2个参数是模板的数据来源对象

    /**
     * 如果传了第三个参数，那么render方法不会马上结束并发给客户端，
     * 而是把渲染后的HTMl字符串发送给回调函数，让回调如何响应
     */
    res.render('add/user.ejs',{username:'张三',age:100,},function(err,data){
       data  += '<script type="text/javascript" src="http://www.qq.com/404/search_children.js" charset="utf-8"></script>';
       res.end(data);
    });
});
/**
 * 真正渲染模板的对象并不是第二个参数
 * 而是 res.locals
 */
app.get('/home',function(req,res){
    console.log(res.locals);
    res.render('home.ejs',{username:'张三',age:100});

});

app.listen(9090);