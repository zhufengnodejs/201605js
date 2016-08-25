var express = require('express');
var app = express();
//https://www.baidu.com/su?cb=jQuery111304911868798080832_1472111430472&wd=bbb&_=1472111430474
//jQuery111304911868798080832_1472111430472({q:"bbb",p:false,s:["嘴","www.500wan.com","奔跑吧兄弟第四季","bilibili","包卜","bbc","bbbt.pw","bbboo.com","宝宝巴士","哔哩哔哩动画"]});
app.get('/jsonp',function(req,res){
    var wd = req.query.wd;//得到关键字
    var cb = req.query.cb;//得到回调函数的方法名
    var result = {q:wd,p:false,s:[]};//拼结果对象
    for(var i=0;i<10;i++)
        result.s.push(wd+i);
    res.send(`${cb}(${JSON.stringify(result)})`);
});
app.listen(9090);