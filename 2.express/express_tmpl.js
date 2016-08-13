var path = require('path');
var url = require('url');
var fs = require('fs');
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
       //定义在中间件里之后，后面所有的路由里都可以使用res.render方法
     res.render1 = function(tmpl,data,callback){
           var viewEngine = app.getKey('view engine');//获得模板引擎
           if(viewEngine == 'ejs'){//如果是ejs
               //如果原来的模板路径有后缀.ejs,则追加一个空串，否则，加.ejs后缀
               tmpl = tmpl+(tmpl.endsWith('.ejs')?'':'.ejs');
               //等于模板的存放目录绝地路径加上模板文件相对路径
               var filename = path.join(app.getKey('views'),tmpl);
               fs.readFile(filename,'utf8',function(err,content){
                   // <%=username%> -> 张三   <%=age%> -> 100
                   content = content.replace(/<%=(\w+)%>/g,function(){
                       var matched = arguments[0];//匹配到的字符子串
                       var attr = arguments[1];//第一个分组,其实就是变量名
                       return data[attr];//返回数据对象属性对应的值
                   });
                   //如果传入了回调函数，那么把结果传递给回调函数
                   if(callback){
                       callback(null,content);
                   }else{
                       //直接响应给客户端
                       res.end(content);
                   }

               });
           }else{
               res.end('不支持的模板引擎')
           }
       }
     //next表示调用下一个层
     function next(){
         var layer = app.layers[index++];
         if(!layer){
             return res.end('CANNOT '+req.method+' '+pathname);
         }
         //取出当前层然后让索引累加

         //如果此层的类型是中间件的话 {type,path,listener}
        if(layer.type=='middleware'){
            //如果请求的路径名是以当前path开头的话，则匹配
            // /user/add /user/
            if(pathname == layer.path || '/' == layer.path || pathname.indexOf(layer.path+'/') == 0){
                layer.listener(req,res,next);//中间有三个参数
            }else{
                next();
            }
        }else{//如果此层是路由的话
            if((layer.method== 'all' || method == layer.method) && (layer.path == pathname|| layer.path == '*')) {
                return layer.listener(req, res);//路由有两个参数
            }else{
                next();
            }
        }
     }
       //定义完成之后立刻调用此方法开始迭代
     next();
   }
    //app内部维护了一个监听数组，可以有是一个中间件，也可以是一个路由
   app.layers = [];
    //为app增加自定义属性，第一个参数是路径，第二个参数是请求监听函数
   var methods = ['all','get','post','delete','head','put'];
   methods.forEach(function(method){
        app[method] = function(path,listener){
            console.log('get',app.layers);
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
    app.settings = {};//此对象中保存所有的配置项
    app.set = function(key,value){//把一个key和value设置到app内部settings
        app.settings[key] = value;
    }
    app.getKey = function(key){//从app.settings中获取一个key
        return app.settings[key];
    }
    //启动一个服务器，并且把自己作为监听函数传进去,再在port上监听客户端的请求
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };

   return app;
}

