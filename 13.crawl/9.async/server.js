var express = require('express');
var app = express();
app.get('/name',function(req,res){
    res.send('张三');
});
app.get('/age',function(req,res){
    res.send('18');
});
app.get('/home',function(req,res){
    res.send('北京');
});
app.listen(9090);