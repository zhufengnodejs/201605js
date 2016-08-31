module.exports = {
    promisify(fn){
        return function(){
            var args = Array.from(arguments);
            return new Promise(function(resolve,reject){
                fn.apply(null,args.concat([function(err,data){
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                }]));
            });
        }
    },
    promisifyAll(){

    }
}