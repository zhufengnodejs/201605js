var {name,age} = {name:'zfpx',age:8};
//let desc = name+' is '+age+' years old';
/*let desc = `${name} is ${age} years old!`;
console.log(desc);*/
/**
 *
 * @param string  普通字符串数组
 * @param values  变量值数组
 */
function desc(strings,...values){
  var result = '';
  for(var i = 0;i<values.length;i++){
      result += (strings[i]+values[i]);
  }
  result+=strings[i];
    console.log(result);
}
var templStr = '${name} is ${age} years old!';
//标签其实是一个函数
//desc`${name} is ${age} years old!`;

function trans(desc,templStr){
    var strings = templStr.split(/\$\{\w+\}/);
    //[ '', ' is ', ' years old!' ]
    var values = templStr.match(/\$\{(\w+)\}/g);
    values = values.map(function(value){
        return eval(value.match(/\$\{(\w+)\}/)[1]);
    });
    desc.apply(null,[strings,...values])
}
trans(desc,templStr)
/*

var str = '${name} is ${age} years old!';
var strings = str.split(/\$\{\w+\}/);
console.log(strings);
*/


