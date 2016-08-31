class Promise {
   //构造函数一般用来初化私有变量
   constructor(fn){
       //默认状态是初始态，未完成态
       this.status = 'unfulfilled';
       //当任务成功完成的时候调用此方法表示任务成功完成
       var resolve = (data)=>{

       }
       var reject = (error)=>{

       }
       var notify = (data)=>{

       }
       fn(resolve,reject,notify);
   }

   then(fulfilledHandler,errorHandler,progressHandler){
        //把这三个处理函数都保存在promise实例的内部
        this._fulfilledHandler = fulfilledHandler;
        this._fulfilledHandler = fulfilledHandler;
        this._fulfilledHandler = fulfilledHandler;
   }
}


module.exports = Promise;