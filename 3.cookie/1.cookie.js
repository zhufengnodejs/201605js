var http = require('http');
var url = require('url');
//创建一个http服务器
http.createServer(function (req,res) {
    //把URL转成对象
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname;
  //如果请求路径是/write的话表示写一个cookie
  if(pathname == '/write'){
      //第一次访问服务器的时候，服务器通过响应头Set-Cookie可以把此cookie种植到客户端
    res.setHeader('Set-Cookie','name=zfpx');
    res.end('写入cookie');
  //如果请求路径是/read的话表示读取cookie
  }else if(pathname == '/read'){
    //下次此客户端再次访问服务器的时候会把此cookie发送到服务器
    var cookie = req.headers.cookie;
    res.end(cookie);
  }else{
      res.end('404');
  }
}).listen(9090);