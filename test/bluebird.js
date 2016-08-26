module.exports = {
    promisify(fn){
        return function () {
            var args = Array.from(arguments);
            return new Promise(function (resolve, reject) {
                fn.apply(null, args.concat(function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(arguments[1])
                    }
                }));
            })
        }
    },
    promisifyAll(obj){
        for(var attr in obj){
            if(obj.hasOwnProperty(attr) && typeof obj[attr] =='function'){
                obj[attr+'Async'] = this.promisify(obj[attr]);
            }
        }
        return obj;
    }
}