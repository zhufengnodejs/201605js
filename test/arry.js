var arr  = [1,2,3,4,5];
Array.prototype.filter = function(fn){
    var templArray = [];
    for(var i=0;i<this.length;i++){
        if(fn(this[i])){
            templArray.push(this[i]);
        }
    }
    return templArray;
}
/*//filter 过滤数组
var newArr = arr.filter(function(item){
    return item != 2;
});
console.log(newArr);*/
Array.prototype.map = function(fn){
    var templArray = [];
    for(var i=0;i<this.length;i++){
        templArray.push(fn(this[i]));
    }
    return templArray;
}
/*var newArr =  arr.map(function(item){
    return item *2;
});*/
Array.prototype.forEach = function(fn){
    for(var i=0;i<this.length;i++){
        fn(this[i]);
    }
}
/*arr.forEach(function(item){
    console.log(item);
});*/

Array.prototype.some = function(fn){
    for(var i=0;i<this.length;i++){
        if(fn(this[i]))
          return true;
    }
    return false;
}
//所有的元素都返回true
Array.prototype.every = function(fn){
    for(var i=0;i<this.length;i++){
        if(!fn(this[i]))
            return false;
    }
    return true;
}
//只要有一个元素返回true
var result = arr.some(function(item){
    return item >3;
});
Array.prototype.reduce = function(fn){

}

//收敛 把一个数组计算成一个值
/**
 * 两个参数
 * 1. 函数
 * 2. 初始值
 * 第一次执行 初始值是curr,数组的第一个元素是next
 * 第二执行 初始值是上一次函数执行的返回值，第二个元素为next
 *
 */
var result =  arr.reduce(function(curr,next){
 return curr + next;
},0);

console.log(result);