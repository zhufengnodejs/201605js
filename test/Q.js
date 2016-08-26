module.exports = {
    defer(){
        var _success,_error;
        return {
            resolve(data){
                _success(data);
            },
            reject(err){
                _error(err);
            },
            promise:{
                then(success,error){
                    _success = success;
                    _error = error;
                }
            }
        }
    }
}