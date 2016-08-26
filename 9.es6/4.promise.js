/**
 * Promise是一个构造函数 类
 * 是一个JS里原生的对象
 * 1. 读取一个文件，成功之后打印文件内容，失败了打印失败原因
 */
var fs = require('fs');
/**
 * 刚开始的时候处于初始态
 * 调用reject方法可以让状态变成失败态，然后调用失败的回调
 * 调用resolve方法可以让状态成功了,调用成功的回调
 *
 * @type {Promise}
 */
var promise = new Promise(function(resolve,reject){
    fs.readFile('1.txt','utf8',function(err,data){
        if(err)
            reject(err);//失败的话会把失败的原因告诉 reject
        else
            resolve(data);//如果成功的话会把成功读取到的内容告诉 resolve
    })
});
//promise有一个方法叫做then方法，用于注册成功和失败的回调
// onFulled 成功的回调 onFailed失败的回调
promise.then(function(data){
    console.log(data);
},function(error){
 console.error(error);
});
