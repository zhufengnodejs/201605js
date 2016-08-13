var express = require('./express_middleware');
//得到APP监听函数
var app= express();
app.use('/user',function(req,res,next){
    res.end('user');
});
app.listen(9090);