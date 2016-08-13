var path = require('path');
var url = require('url');

//导出一个函数 express
module.exports = function(){
   //当调用此函数的时候返回一个函数，就是监听函数，有两个参数,分别是请求和响应
   var app =  function(req,res){
     //把url转换成对象
     var urlObj =  url.parse(req.url);
     //取得路径名
     var pathname = urlObj.pathname;
       //循环保存在数组的每个路由配置对象
     for(var i=0;i<app.routes.length;i++){
        var route = app.routes[i];
        if(route.path == pathname){
            route.listener(req,res);
        }
     }
   }
    //app内部维护了一个监听数组，是一个路由数组
   app.routes = [];
    //为app增加自定义属性，第一个参数是路径，第二个参数是请求监听函数
   app.get = function(path,listener){
       //向数组中增加新的元素，是一个配置对象，由路径和监听函数组成
       app.routes.push({method:'get',path:path,listener:listener});
   }

   return app;
}