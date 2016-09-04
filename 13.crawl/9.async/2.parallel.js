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

function parallel(tasks,cb){
    var event =new require('events')();
    var count = 0;
    var result = [];
    function next(index,err,data){
        count++;//每完成一个新的任务，count完成任务的数量要加1
        if(err){
            return cb(err,result);
        }
        //通过索引给数组赋值
        result[index] = data;
        if(count>=tasks.length){
            return cb(err,result);
        }
    }
    event.on('finish',next)
    for(let i=0;i<tasks.length;i++){
        //把一个绑定了this指针和i变量的函数传进去
        tasks[i](function(err,data){
            event.emit('finish',i,err,data);
        });
    }
}

/*function parallel(tasks,cb){
    var promises = [];
    for(var i=0;i<tasks.length;i++){
        //构建一个新的promise实例
        var promise = new Promise(function(resolve,reject){
            tasks[i](function(err,data){
                if(err)
                    reject(err);
                else
                    resolve(data);
            });
        });
        promises.push(promise);
    }
    Promise.all(promises).then(cb,cb);
}*/

/*
function parallel1(tasks,cb){
    var count = 0;
    var result = [];
    function next(index,err,data){
        count++;//每完成一个新的任务，count完成任务的数量要加1
        if(err){
            return cb(err,result);
        }
        //通过索引给数组赋值
        result[index] = data;
        if(count>=tasks.length){
            return cb(err,result);
        }
    }
    for(let i=0;i<tasks.length;i++){
        //把一个绑定了this指针和i变量的函数传进去
        tasks[i](next.bind(null,i));
    }
}*/


