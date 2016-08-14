/*
// => /book\/([^\/]+)\/([^\/]+)  ['id','name','age']
//这是路径中指定的路径
var str = '/book/:id/:name/3/:age';
//提供此路径中的路径参数名称
var paramNames = str.match(/\/:(\w+)/g).map(function(item){return item.slice(2)});
console.log(paramNames);
//把此路径转化成正则表达式
var regex = str.replace(/\//g,'\\/').replace(/:\w+/g,'([^\/]+)');
console.log(regex);
//如何把此URL转成一个对象 req.params = {id:1,name:'zfpx',age:8};
var url = '/book/1/zfpx/3/8';
///-----------------

var obj = {};
/!*url.replace(new RegExp(regex), function () {
    console.log(arguments);
    var ary1 = Array.prototype.slice.call(arguments, 1);
    ary1.length = ary1.length - 2;

    console.log(ary1);
    for (var i = 0; i < ary1.length; i++) {
        obj[paramNames[i]] = ary1[i];
    }
});*!/
//用客户端传过来的url匹配正则
var matched = url.match(new RegExp(regex));
//循环属性数组
for(var i=0;i<paramNames.length;i++){
    //matched第一个值是整个字符串，所以从第二个开始才是分组
    obj[paramNames[i]] = matched[i+1];
}
console.log(obj);

*/
/*
const server = require('_http_server').STATUS_CODES;

console.log(server);*/
//就是把cookie从字符串转成对象
//var cookieParser = require('cookie-parser');
// name=zfpx  => {name:'zfpx'}

var querystring = require('querystring');
console.log(querystring.parse('name=zfpx&age=8'));
//如果不同字段之间的分隔符不是&符的话，需要手工指定分隔符
console.log(querystring.parse('name@zfpx; age@8','; ','@'));