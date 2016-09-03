var express = require('express');
var app = express();
app.get('/clock',function(req,res){
    //表示允许所有的来源
    res.setHeader('Access-Control-Allow-Origin','*');
    //返回当前的时间
    res.send(new Date().toLocaleString());
});
app.listen(9090);