var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
express.static  = function(root){
    /**
     * 1. 判断一下root下面有没有此文件，如果有，读出来并返回，如果没有则调用next继续向下匹配
     * 它返回一个中间件函数
     */
    return function(req,res,next){
        //取得要访问的文件的绝对路径
        // root = E:\201605js\2.express\public
        // req.path = /index.html
        var filename = path.join(root,req.path);
        //判断文件是否存在
        fs.exists(filename,function(exists){
            if(exists){
                fs.createReadStream(filename).pipe(res);
            }else{
                next();
            }
        });
    }
}
//会返回一个静态文件中间件
//resolve 是从当前路径出来，得到一个绝对路径
app.use(express.static(path.resolve('public')));
app.get('/home',function(req,res){
    //path must be absolute or specify root to
    //或者在参数里指定绝对路径
   //res.sendFile(path.resolve('home.html'));
    //或者用相对路径，但是给定一个root参数
   res.sendFile('./home.html',{root:path.resolve()});
   //res.sendfile('./home.html');
});

app.listen(9090);