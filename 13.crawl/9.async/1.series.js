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
    function (callback) {
        setTimeout(callback, 3000, null, '电视');
      /*  setTimeout(function(){
            callback(null,'电视');
        },3000);*/
    },
    function (callback) {
        setTimeout(callback, 1000, null, '作业');
    }
    // result是一个数组 结果的顺序和任务的排序顺序完全一致
], function (err, result) {
    console.log(result)
    console.timeEnd('cost');
})

function series(tasks,cb){

}