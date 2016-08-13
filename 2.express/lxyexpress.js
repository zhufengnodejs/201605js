//导出一个函数reqress
var url=require('url');
var http=require('http');
module.exports = function () {
    //当调用次函数的时候返回一个俄函数，就是监听函数，有两个参数，分别是请求和响应
    var app= function (req,res) {
        var urlObj=url.parse(req.url);
        console.log(urlObj)
        var pathname=urlObj.pathname;
        var method=req.method.toLowerCase();//请求中的方法名（‘get’），要转化为小写
        for (var i=0;i<app.route.length;i++){
            var routes=app.route[i];
            //如果方法名相同并且路径相同的话，就可以执行对应的回调函数
            if((routes.method=='all'||method==routes.method)&&(routes
                    .path==pathname||routes.path=='*')){
                //执行对应的监听函数
                routes.listener(req,res);
                //如果当前路由对象和当前请求已经成功配对则不再继续匹配
                return;
            }
        }
    };
    //维护了一个监听数组
    app.route=[];
    //为app增加自定义属性，第一个参数是路径，第二个参数是请求监听的参数
    var methods=['get','post','delete','all'];
    methods.forEach(function (method) {
        app[method]= function (path,listener) {
            //向数组中增加新的元素，是一个配置对象，由路径和监听函数组成
            app.route.push({method:method,path:path,listener:listener});
        };
    });
    app.listen= function (port) {
        require('http').createServer(app).listen(port)
    };
    return app;
};