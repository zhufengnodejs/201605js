module.exports = function(name){
    return function(msg){
        var DEBUG = process.env.DEBUG;
        //logger:* -> logger:*
        // logger:是定死的，后面可以有任意字符
        DEBUG = DEBUG.replace('*','.*');
        var regex = new RegExp(DEBUG);//转成正则表达式
        if(regex.test(name)){//如果此正则和名称相匹配则输出日志
            console.log(name,msg);
        }
    }
}