var async = require('async');
console.time('cost');
/*
 * 任务同时开始，但要当所有的任务都执行完毕之后才会调用回调
 */
parallel([
   function(next){
     setTimeout(next,3000,null,'电视');
   },
   function(next){
       setTimeout(next,1000,null,'作业');
   }
],function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})

function parallel(){

}