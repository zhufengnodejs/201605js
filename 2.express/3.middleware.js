var express = require('express');
//得到APP监听函数
var app= express();

/**
 * 1. 昨天加班了，要报销昨天晚上的餐费
 * /money 10000 报销1万块钱
 *
 */
//使用中间件  请求 响应 next函数
//部门经理
app.use('/money',function(req,res,next){
    req.money = 10000;
    next();
});
//总监
app.use('/money',function(req,res,next){
    req.money = 100;
    next();
});

//CTO
app.use('/money',function(req,res,next){
    req.money = req.money * 1.2;
    next();
});
//到自己手里了
app.get('/money',function(req,res){
    res.end(''+req.money);
});

app.listen(9090);