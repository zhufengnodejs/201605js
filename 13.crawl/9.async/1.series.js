var async = require('async');
/**
 * 串行
 * 以串行的执行多个异步函数，上一个完成后才能开始下一个函数
 * 调用callback表示此异步任务完成
 *    1参数 错误对象
 *    2参数 返回值
 *
 **/
console.time('cost');
series([
    function (next) {
        setTimeout(next, 3000, '出错', '电视');
      /*  setTimeout(function(){
            callback(null,'电视');
        },3000);*/
    },
    function (next) {
        setTimeout(next, 1000, null, '作业');
    }
    // result是一个数组 结果的顺序和任务的排序顺序完全一致
], function (err, result) {
    console.log(err)
    console.log(result)
    console.timeEnd('cost');
})

function series(tasks,cb){
    var result = [];//数组中放置每个函数输出结果
    let index = 0;//当前索引
    next();//开始迭代
    function next(err,data){//错误对象 上次函数输出结果
       if(err) //如果有错误，直接结束
           return cb(err,result);
       if(index>0) //如果是第二次以上执行next,收集输出结果
           result.push(data);
       if(index>=tasks.length)//如果索引已经越界，表示迭代完成
           return cb(err,result);
       //取出当前的任务并自动执行
       var curr = tasks[index++];
       curr(next);
    }

}