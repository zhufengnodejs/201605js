var arr  = ['zfpx',8,['smoking','drinking']];
/*var name = arr[0];
var age = arr[1];*/
// 对号入座
/*var [name,age,[hobby1,hobby2]] = arr;
console.log(name,age,hobby1,hobby2);*/
/*
var [,age,] = arr;
console.log(age);
*/
//对象的解析赋值
/*var obj = {name:'zfpx',age:8};
//先声明一个变量myname,然后把obj.name赋给myname变量
//先声明一个变量myage,然后把obj.age赋给myage变量
var {name:myname,age:myage} = obj;
console.log(myname,myage);*/
//可以给默认值
/*
let [a,b,c='默认C'] = [1,2,3];
console.log(a,b,c);
*/
// jquery $.ajax
//解析参数对象可以指定默认值和必输入项
function ajax({method='GET',url=new Error('url必须输入')}){
 /* var method = options.method?options.method:'GET';
  var url =  options.url?options.url:throw Error('url必须要传');*/
    console.log(method,url);
}
ajax({});