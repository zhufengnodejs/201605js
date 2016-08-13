var express = require('express');
//得到APP监听函数
var app= express();

/**
 * 1. 昨天加班了，要报销昨天晚上的餐费
 * 1. 在整个处理过程 ，请求和响应始终是同一个对象
 * 2. 上一个中间件的处理结果可以传递给下一个中间件或路由
 * 3. 中间件可以通过是否调用next函数来决定是否将此请求继续向下传递
 * 4. 路由和中间件是放在一个数组中的
 * 5.
 *
 *
 */
//使用中间件  请求 响应 next函数
//部门经理
app.use('/money',function(req,res,next){
    req.money = 10000;
    console.log('部门经理',req.money);
    //next();

    res.end('昨天晚上明明是8点59走的，不报销');
});
//总监
app.use('/money',function(req,res,next){
    req.money = 100;
    console.log('总监',req.money);
    next();
});

//CTO
app.use('/money',function(req,res,next){
    req.money = req.money * 1.2;
    console.log('CTO',req.money);
    next();
});
//到自己手里了
app.get('/money',function(req,res){
    console.log('自己',req.money);
    res.end(''+req.money);
});

app.listen(9090);