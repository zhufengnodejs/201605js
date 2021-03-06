var async = require('async');
console.time('cost');
async.auto({
  water:function(callback){
      setTimeout(callback,1000,null,'水');
  },
  flour:function(callback){
      setTimeout(callback,1000,null,'面粉');
  },
  mix:['water','flour',function(result,callback){
      setTimeout(callback,2000,null,result.water+'+'+result.flour+'+和面');
  }],
  steam:['mix',function(result,callback){
        setTimeout(callback,3000,null,result.mix+'+蒸馒头');
  }]
},function(err,result){
    console.timeEnd('cost');
    console.log(err);
    console.log(result);
})