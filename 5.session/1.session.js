var express = require('express');
var cookieParser = require('cookie-parser')
var uuid = require('uuid');
var app = express();
//当使用此中间件之后会在 req.cookies (读取请求头中的cookie字段，并转成对象)
app.use(cookieParser());
/**
 * 要模拟session的实现
 * 1. 第一次访问服务器(理发店)的时候，服务器会生成一个sessionId(要求每个客户不一样)
 * 2. 在服务器端记录此sessionId对应的余额
 */
//此对象记录着服务器所有的session=理发店老板的那个账本
var sessions = {};
var SESSION_KEY = 'connect.sid';
app.get('/',function(req,res){
    //取得请求头中的cookie对象
    var cookies = req.cookies;
    //取得此客户端的sessionId(就相当于卡号)
    var sessionId = cookies[SESSION_KEY];
    if(sessionId){
        //在sessions对象中查取此ID对应的数据对象 {balance:100}
        var sessionObj = sessions[sessionId];
        if(sessionObj){
            sessionObj.balance -= 10;
            res.send('欢迎你再次光临，你的卡上余额为'+sessionObj.balance+'元');
        }else{//如果客户端带着卡号过来了，但是找不到对应
            genid();
        }
    }else{
        genid();
    }

    function genid(){
        //生成一个永远不会重复的字符串来做为此客户端的会话唯一标识
        var sessionId = uuid.v4();
        //在服务器开辟的内存空间里记录此卡号对应的对象信息
        sessions[sessionId] = {balance:100};
        //把此sessionId发送给客户端
        res.cookie(SESSION_KEY,sessionId);
        res.send('欢迎你初次光临，你的卡上余额为100元');
    }
});

app.listen(9090);