var async = require('async');
waterfall([
    function(callback){
        callback(null,'水');
    },
    function(data,callback){
        callback(null,data+'+咖啡');
    },
    function(data,callback){
        callback(null,data+'+奶');
    }
],function(err,result){
    console.log(err);
    console.log(result);
})

function waterfall(tasks,cb){
    var result;//数组中放置每个函数输出结果
    let index = 0;//当前索引
    callback();//开始迭代
    function callback(err,data){//错误对象 上次函数输出结果
        if(err) //如果有错误，直接结束
            return cb(err,result);
        if(index>0) //如果是第二次以上执行next,收集输出结果
            result= data;
        if(index>=tasks.length)//如果索引已经越界，表示迭代完成
            return cb(err,result);
        //取出当前的任务并自动执行
        var curr = tasks[index++];
        if(index==1)
            curr(callback);
        else
            curr(result,callback);
    }
}