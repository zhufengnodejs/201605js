//var co = require('co');
function co(gene){
  var it = gene();
  function next(data){
     var result = it.next(data);
      console.log(result);
     while(!result.done){
        result.value.then(next);
     }
  }
  next();
}
co(function* (){
    console.log(1);
    var a = yield new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('a');
        },1000);
    });
    console.log(a);
    var b = yield new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(a+'-b');
        },1000);
    });
    console.log(b);
});