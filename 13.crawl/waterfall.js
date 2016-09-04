var async = require('async');
waterfall([function (callback) {
    callback(null, "水");
}, function (data, callback) {
    callback(null, data + '+咖啡');
}, function (data, callback) {
    callback(null, data + '+牛奶');
}], function (err, results) {
    console.log(results);//水+咖啡+牛奶
});

function waterfall(tasks,cb){
    let result;
    let index=0;
    next();
    function next(err,data){
        if(index >0)
            result = data;
        if(err)
            return cb(err,result);
        if(index >= tasks.length)
            return cb(err,result);
        var curr = tasks[index++];
        if(index >1)
            curr(result,next);
        else
            curr(next);
    }
}