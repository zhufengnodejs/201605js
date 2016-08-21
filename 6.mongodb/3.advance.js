var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/201605js');
var personSchema = new mongoose.Schema({
    username:String, //用户名
    age:Number//年龄
});
//为entity扩展实例方法 methods是实例方法的集合
personSchema.methods.findSameAge = function(cb){
 //先得到模型，然后寻找跟自己年龄相同的人，找到后调用回调函数
 this.model('Person').find({age:this.age},cb);
}
//为模型添加新的自定义方法
personSchema.statics.findByUsername = function(name,cb){
    this.find({username:new RegExp(name)},cb);
}
var personModel = mongoose.model('Person',personSchema);
personModel.findByUsername('1',function(err,docs){
    console.log(docs);
});
//构建一个entity实体
var zhangsan = new personModel({
    username:'张三',
    age:5
});
console.log(zhangsan.username,zhangsan.age);
//调用刚才扩展的实例方法
zhangsan.findSameAge(function(err,docs){
    console.log(docs);
})
