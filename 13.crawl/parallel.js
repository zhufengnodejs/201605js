var async = require('async');
console.time('cost');
/*
 * 任务同时开始，但要当所有的任务都执行完毕之后才会调用回调
 * 1. 事件实现
 * 2. 回调实现
 * 3. promise
 *
 */
parallel([
    function (next) {
        setTimeout(next, 3000, null, '电视');
    },
    function (next) {
        setTimeout(next, 1000, null, '作业');
    }
], function (err, result) {
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})
//事件来实现
function parallel1(tasks, cb) {
    let index = 0;
    var result = [];

    function next(pos, err, data) {
        result[pos] = data;
        index++;
        if (index == tasks.length) {
            cb(err, result);
        }
    }
    for(var i=0;i<tasks.length;i++){
        tasks[i](next.bind(null,i));
    }
}


function parallel(tasks, cb) {
    var promises = [];
    for(var i=0;i<tasks.length;i++){
        var promise = new Promise(function(resolve,reject){
            tasks[i](function(err,data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
        promises.push(promise);
    }

    Promise.all(promises).then(cb);
}