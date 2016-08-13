var path = require('path');
var url = require('url');

//导出一个函数 express
module.exports = function(){
   //当调用此函数的时候返回一个函数，就是监听函数，有两个参数,分别是请求和响应
   var app =  function(req,res){
     //把url转换成对象
     var urlObj =  url.parse(req.url);
     //获取请求中的方法名 方法名要从大写转成小写
     var method = req.method.toLowerCase();
     //取得路径名
     var pathname = urlObj.pathname;
     var index = 0;
     //next表示调用下一个层
     function next(){
         //取出当前层然后让索引累加
        var layer = app.layers[index++];
         //如果此层的类型是中间件的话 {type,path,listener}
        if(layer.type=='middleware'){
            //如果请求的路径名是以当前path开头的话，则匹配
            if(pathname.indexOf(layer.path) ==0){
                layer.listener(req,res,next);//中间有三个参数
            }
        }else{//如果此层是路由的话
            if((layer.method== 'all' || method == layer.method) && (layer.path == pathname|| layer.path == '*')) {
                return layer.listener(req, res);//路由有两个参数
            }
        }
     }
       //定义完成之后立刻调用此方法开始迭代
     next();
      /* //循环保存在数组的每个路由配置对象
     for(var i=0;i<app.layers.length;i++){
         //取出当前的路由
        var route = app.layers[i];
         //如果方法名相同并且路径相当的话，就可以执行对应的回调函数了
        if((route.method== 'all' || method == route.method) && (route.path == pathname|| route.path == '*')){
            //执行对应的监听函数
            route.listener(req,res);
            //如果已经当前路由对象和当前请求已经成功配对，则不再继续匹配
            break;
        }
     }*/
   }
    //app内部维护了一个监听数组，可以有是一个中间件，也可以是一个路由
   app.layers = [];
    //为app增加自定义属性，第一个参数是路径，第二个参数是请求监听函数
   var methods = ['all','get','post','delete','head','put'];
   methods.forEach(function(method){
        app[method] = function(path,listener){
            //向数组中增加新的元素，是一个配置对象，由路径和监听函数组成
            app.layers.push({type:'route',method:method,path:path,listener:listener});
        }
    })
    //注册中间件,注册的时候可以省略path
    app.use = function(path,listener){
        if(typeof path == 'function'){//意味着没有传路径 ，只传了函数
            listener = path;//把函数引用赋给监听函数，中间件函数
            // 中间件匹配路径的时候和路由不一样，只要前缀相同就可以匹配上
            path = '/';//给path赋一个默认值
        }
        //因为中间件不考虑方法名
        app.layers.push({type:'middleware',path:path,listener:listener});
    }

    //启动一个服务器，并且把自己作为监听函数传进去,再在port上监听客户端的请求
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };
   return app;
}