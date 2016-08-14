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


