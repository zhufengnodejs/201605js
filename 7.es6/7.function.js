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
/*var fs = require('fs');
//匿名函数的递归用到了函数名
fs.readFile('./num.txt','utf8',function c(err,data){
    var num = parseInt(data);
    if(num ==1)
        return 1;
    var result = num * c(err,--num);;
    console.log(result);
    return result;
})*/
/*// 阶乘 5
console.log(calc(5));*/

var input = [1,4,3,2];
/*output = input.map(item => item*2);
//var output = [2,4,6];
console.log(output);*/
//参数多于一个，需要用小括号包裹
//input.sort((a,b)=>a - b);
//如果函数体不只是有返回值，还有别的语句，需要用大括号包裹
input.sort((a,b)=>{
    console.log('compare a and b');
    return a-b;
});
console.log(input);


var person = {
    name:'zfpx',
    print:function(){
        //箭头函数没有自己的this指针，使用复用外层的this指针
        setTimeout(()=>{
            console.log(this.name);
        },500);
    }
}
person.print();