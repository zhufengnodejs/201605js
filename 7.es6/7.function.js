let print = function(a,b,c){
    console.log(a,b,c);
}
//展开操作符
print(...[1,2,3]);

function max(){
    console.log(Math.max(...arguments));
}
//max(4,6,3,8);
//剩余操作符
function sum(prefix,...values){
    return prefix + values.reduce(function(curr,next){
            return curr + next;
        },0);
}
//console.log(sum('$',1,2,3,4));// $6 $10
// reduce es5函数 用于把一个数组收缩成一个值
var arr = [1,2,3];
//1 是一个函数，数组中的每个元素都要依次传递给此函数
//2 是一个初始值
//数组中有多少个元素，function就会执行多少次
//第一次 curr=0初始值,item等于第一个元素
//此函数会返回一个结果，这个结果会成为此函数下次执行时候的curr
/*arr.reduce(function(curr,item){
    console.log(curr,item);
    return curr + item;
},0);*/

// c就成了函数的名字
/*var calc = function c(num){
    if(num ==1)
        return 1;
   return num * c(--num);
}*/
var fs = require('fs');
//匿名函数的递归用到了函数名
fs.readFile('./num.txt','utf8',function c(err,data){
    var num = parseInt(data);
    if(num ==1)
        return 1;
    var result = num * c(err,--num);;
    console.log(result);
    return result;
})
/*// 阶乘 5
console.log(calc(5));*/
