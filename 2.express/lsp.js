//导出一个函数express
var url =require('url');
module.exports = function(){
    //当调用此函数的时候return 一个函数 就是监听函数  有两个参数分别是请求和响应
    var app = function (req,res){
        var urlObj = url.parse(req.url,true);
        var method = req.method.toLowerCase();//获取请求中的方法名
        var pathname = urlObj.pathname;//取得路径名
        //循环保存在数组中的每一个配置对象
        for(var i=0;i<app.routes.length;i++){

            var route = app.routes[i];
            if( (method == route.method || route.method == 'all') && (route.path == pathname || route.path == '*')){
                //取出当前的路由  如果方法名相同  并且我们的路径相同的话，就可以执行对应的回掉函数
                route.listener(req,res);//如果当前路由对象和当前请求已经匹配上 则不再继续匹配
                break;
            }
        }
    };
    var methods = ['get','post','put','delete','head','all'] ;
    //app 内部维护了一个监听数组
    app.routes = [];
    //为app增加自定义属性  第一个参数是路径  第二个参数是请求监听函数
    methods.forEach(function(method){
        console.log(method);
        app[method]= function(path, listener) {

            //向我们的数组中增加新的元素  是一个配置对象   由路径和监听函数组成
            app.routes.push({
                method:method,
                path:path,
                listener:listener
            })
        }
    });

    app.listen = function(port){
        require('http').createServer(app).listen(port)
    };
    return app;
};
