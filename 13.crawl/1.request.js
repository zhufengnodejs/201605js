var request = require('request');
//转码工具 可以把解码gbk的内容
var iconv = require('iconv-lite');
/**
 * ascii  127 字符
 * 中国 gb2312  255 中
 * 日本         255 日
 * 韩国
 * utf8 全球统一编码
 */
//向指定的url发起请求，回到响应
request({
    url:'http://www.163.com',//指定访问的url地址
    encoding:null //如果不特意指定编码的话，默认编码就是utf8
},function(err,response,body){
    //err错误对象 response响应对象 body是响应体
   if(err){
       console.error(err);
   }else{
       //获取响应体的内容类型
       var contentType = response.headers['content-type'];
       //如果内容类型是GBK的话
       if(contentType.match(/\bGBK\b/)){
           //对此Buffer按 GBK进行转码，转成utf8字符串
           var result = iconv.decode(body,'gbk');
           console.log(result);
       }else {
           //如果是其它的话，直接转成utf8字符串
           console.log(body.toString());
       }

   }
});