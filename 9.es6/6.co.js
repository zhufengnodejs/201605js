//var co = require('co');
function co(gene){
  var it = gene();
  function next(data){
     var result = it.next(data);
      console.log(result);
     if(!result.done){
        result.value.then(next);
     }
  }
  next();
}
var fs =require('fs');
co(function* (){
    console.log(1);
    var a = yield new Promise(function(resolve,reject){
        console.log('开始a');
        setTimeout(function(){
            console.log('结束a');
            resolve('a');
        },100);
    });
    console.log(a);
    var b = yield new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(a+'-b');
        },100);
    });
    console.log(b);
});