module.exports = function(gen){
    var it = gen();
    next();
    function next(data){
        var result = it.next(data);
        if(!result.done){
            result.value.then(next);
        }
    }
}