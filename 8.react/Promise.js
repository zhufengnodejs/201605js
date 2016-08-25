var Promise  = function(fn){
    var self = this;
   function resolve(data){
       self.success(data);
   }
   function reject(error){
       self.fail(error);
   }
   fn(resolve,reject);
}

Promise.prototype.then = function(success,fail){
    this.success = success;
    this.fail = fail;
}

module.exports = Promise;