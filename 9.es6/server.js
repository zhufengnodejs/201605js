/**
 * 1. 通过手机号获得微信号
 * 2. 通过微信号获得用户呢称
 */
var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'5.ajax.html'));
});
var weixins = {'15718856132':'zhangrenyang2000'};
//通过手机号获得微信号
app.get('/getWeixinByPhone',function(req,res){
    var phone = req.query.phone;
    console.log(weixins[phone]);
    res.send(weixins[phone]);
});
var weixinInfos = {'zhangrenyang2000':'阳阳'};
//通过微信号获得用户呢称
app.get('/getNameByWeixin',function(req,res){
    var weixin = req.query.weixin;
    console.log(weixinInfos[weixin]);
    res.send(weixinInfos[weixin]);
});

app.listen(9090);
