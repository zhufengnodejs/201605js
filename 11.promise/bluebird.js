module.exports = {
    //拥有一个promisify的属性，接收一个原来的异步函数 readFile
    promisify(fn){
        return function(){
            //得到传给函数的参数 并转成数组
            var args = Array.from(arguments);
            return new Promise(function(resolve,reject){
                //在此调用readFile方法
                fn.apply(null,args.concat(function(err,data){
                    if(err){
                        //如果失败会调用失败的回调
                        reject(err);
                    }else{
                        //如果成功会调用成功的回调
                        resolve(data);
                    }
                }));
            });
        }
    },
    //把参数对象中所有的异步方法都对应加上一个返回promise的新方法
    // fs.readFile    fs.readFileAsync 返回一个promise
    promisifyAll(obj){

    }
}