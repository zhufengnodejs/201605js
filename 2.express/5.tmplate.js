//var express = require('express');
var express = require('./express_tmpl');
var path = require('path');
var app = express();
//设置一个变量保存在app内部 设置模板引擎
app.set('view engine','ejs');
//设置模板的存放目录
app.set('views',path.join(__dirname,'views'));
//添加render方法
/**
 * 1. 把模板从硬盘上读出来,读取内存里，是字符串格式。
 * 2. 所模板里的变量用数据对象里的属性替换掉
 * 3. 替换完成后发回给浏览器或客户端
 */
app.use(function(req,res,next){
    res.render = function(){
        var viewEngine = app.get('view engine');
        if(viewEngine == 'ejs'){

        }else{
            res.end('不支持的模板引擎')
        }
    }
    next();
});
app.get('/user',function(req,res){
    //使用数据对象渲染模板
    // 第1个参数是模板相对路径
    // 第2个参数是模板的数据来源对象
    res.render('add/user.ejs',{username:'张三',age:100});
});

app.listen(9090);