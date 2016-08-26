function Promise(fn){
    fn((data)=>{
        this._success(data);
    },(error)=>{
        this._error(data);
    });
}
// then方法用于注册成功和失败的回调函数
Promise.prototype.then = function(onFull,onFail){
    this._success = onFull;//把成功的回调保存在promise对象的内部
    this._error = onFail;//把失败的回调保存在promise对象的内部
}

module.exports = Promise;