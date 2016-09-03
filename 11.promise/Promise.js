class Promise {
   //构造函数一般用来初化私有变量
    /**
     * 状态只能从初始态->成功态,初始态->失败态
     *
     */
   constructor(fn){
       //默认状态是初始态，未完成态
       this._status = 'unfulfilled';
       //1.状态改为成功态 2 调成功的回调
       var resolve = (data)=>{
         if(this._status == 'unfulfilled'){
             this._status = 'fulfilled';
             this._fulfilledHandler(data);
         }
       }
       //1. 状态改为失败态 2. 调用失败的回调
       var reject = (error)=>{
         if(this._status == 'unfulfilled'){
               this._status = 'failed';
               this._errorHandler(error);
         }
       }
       //状态不变，调用进程中的回调
       var notify = (data)=>{
         this._progressHandler(data);
       }
       fn(resolve,reject,notify);
   }
    //返回当前状态
   getStatus(){
        return this._state;
   }

   then(fulfilledHandler,errorHandler,progressHandler){
        //把这三个处理函数都保存在promise实例的内部
        this._fulfilledHandler = fulfilledHandler;
        this._errorHandler = errorHandler;
        this._progressHandler = progressHandler;
   }
}


module.exports = Promise;