var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/201605js');
//定义一个模型骨架,定义一个集合中字段的名称和类型
//如果字段名称不符，会忽略此字段，如果类型不符，会报错
var personSchema = new mongoose.Schema({
    username:String, //用户名
    age:Number,//年龄
    email:String, //邮箱
    gender:String, //性别
    birthday:Date, //生日
    married:String //婚姻状态
});
//定义一个可以操作数据库集合的model,类似于命令行中的db.person
//第一个参数是模型的名称 转小写再转复数是数据库中保存的时候集合名称
var personModel = mongoose.model('Person',personSchema);

//3.定义一个实体=集合中的一个文档对象
var wangwuEntity = new personModel({
    username:'王五', //用户名
    age:77,
    //email:'wangwu@qq.com', //邮箱
    //qq:'83687401',
    gender:55, //性别
    birthday:100, //生日
    married:'待离婚' //婚姻状态
})

//entity默认只有一个方法，就是把自己保存到数据库里
wangwuEntity.save(function(err,result){
    if(err){
        console.error(err);
    }else{
        //如果成功的话，result是保存成功之后的文档
        console.log(result);
    }
});

