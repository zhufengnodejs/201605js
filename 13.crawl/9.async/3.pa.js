"use strict";
console.time('cost');
parallel([
    function (callback) {
        setTimeout(callback, 3000, null, '电视');
    },
    function (callback) {
        setTimeout(callback, 1000, null, '作业');
    }
], function (err, result) {
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
});

function parallel(tasks,cb){
    var result = [];//结果
    var finishCount = 0;//完成的数量
    function callback(err,data,index){
        if(err) return cb(err,result);//如果出错，则结束
        result[index]=data;//按索引赋值
        finishCount++;//完成的数量加1
        if(finishCount===tasks.length)//如果已经全部完成的话，结束
            return cb(err,result);
    }
    for(let i=0;i<tasks.length;i++){
        setTimeout(function(){
            let curFn=function(err,data){
                callback(err,data,i)
            };
            tasks[i](curFn);
        },0);
    }
}