var express = require('express');
var url = require('url');
var app = express();
app.use(function(req,res,next){
  // http://localhost:9090/user?name=zfpx&age=8
  var urlObj = url.parse(req.url,true);
  req.path = urlObj.pathname;//端口号和问号之间的部分
  req.query = urlObj.query;//查询字符串转成的对象
  //从请求头中取出主机名
  req.hostname = req.headers.host.split(':')[0];
  next();
});
app.get('/user',function(req,res){
  //1.获取路径名 pathname
    console.log(req.path)
  //2. 获取主机名
    console.log(req.hostname);
  //3. 获取查询对象 其实就是查询字符串对应的对象
    console.log(req.query);
    res.end('ok');
});


app.listen(9090);