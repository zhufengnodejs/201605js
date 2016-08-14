var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
//使用此中间件的时候使用密钥
app.use(cookieParser('zfpx'));
app.get('/write',function(req,res){
    //  signed=true表示需要加密
    res.cookie('name','zfpx',{signed:true});
    res.end();
});
app.get('/read',function(req,res){
    res.send(req.signedCookies);
});

app.listen(9090);