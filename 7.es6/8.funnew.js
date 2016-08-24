function sum(){
    /*return Array.prototype.slice.call(arguments)
        .reduce((curr,next)=>curr+next);*/
    //把一个类数组转成数组
    return Array.from(arguments)
     .reduce((curr,next)=>curr+next);
}
//console.log(sum(1,2,3));
//构建一个数组 长度为3
//如果参数个数是多于1个，表现是一样的
//如果只有一个参数，第1个是指长度，第2种是指初始值
//console.log(Array(3));
//console.log(Array.of(3));

console.log([1,2,3,4,5].copyWithin(1,2,4));
// 1 3 4  4 5

var persons = [
    {id:1,name:'zfpx1'},
    {id:2,name:'zfpx2'},
    {id:3,name:'zfpx3'}
]
//想知道 name=zfpx2
//对于数组中的每个元素执行函数
var rightPerson = persons.find((item,index,arr)=>item.name == 'zfpx3');
console.log(rightPerson);
//寻找到的元素在当前数组中的索引
var index = persons.findIndex((item,index,arr)=>item.name == 'zfpx1');
console.log(index);

let arr = [,,,];
console.log(arr.length);
//把从开始位置和结束位置之间的元素都赋值为a
arr.fill('a',1,2);
console.log(arr);

