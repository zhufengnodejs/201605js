var fs =require('fs');
var Promise = require('./Promise');
function readFile(filename){
    /**
     * promise实例最开始是 unfulfilled 初始态
     *  调用resolve方法会把状态变成成功态 fulfilled
     *  调用reject方法会把状态变成失败态 failed
     *  调用notify不会修改状态
     */
    return new Promise(function(resolve,reject,notify){
          //构建一个可读流
        var rs = fs.createReadStream(filename,{highWaterMark:1});//最高水位线 每次读取的字节数
        var result = '';
        //设置读取编码，设置完成后得到的data变为字符串
        rs.setEncoding('utf8');
        //当读到内容的时候触发data事件
        rs.on('data',function(data){
            //如果读到新的数据，则通知一下得到的新数据
            notify(data);
            result+=data;
        });
        //当读取完毕的时候输出结果
        rs.on('end',function(){
            //如果正常读取完毕了，会调用resolve
            resolve(result);
        });

        rs.on('error',function(error){
            //如果读取失败了，会调用reject
            reject(error);
        });
    });

}
/**
 * fulfilledHandler 变成成功态的回调
 * errorHandler 变成失败态的回调
 * progressHandler 有新的进展的回调
 */
readFile('./1.txt').then(function(data){
    console.log('成功:',data);
},function(error){
    console.error('失败:',error);
},function(data){
    console.log('进展中通知:',data);
});