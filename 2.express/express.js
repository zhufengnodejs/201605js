//导出一个函数 express
module.exports = function(){
   //当调用此函数的时候返回一个函数，就是监听函数，有两个参数,分别是请求和响应
   var app =  function(req,res){

   }
    //app内部维护了一个监听数组，
   app.listeners = [];
    //为app增加自定义属性，第一个参数是路径，第二个参数是请求监听函数
   app.get = function(path,listener){
       //向数组中增加新的元素，是一个配置对象，由路径和监听函数组成
       app.listeners.push({path:path,listener:listener});
   }

   return app;
}