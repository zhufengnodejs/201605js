var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/201605js');
//定义一个模型骨架,定义一个集合中字段的名称和类型
//如果字段名称不符，会忽略此字段，如果类型不符，会报错
var personSchema = new mongoose.Schema({
    username:String, //用户名
    age:Number,//年龄
    home:String
});
//定义一个可以操作数据库集合的model,类似于命令行中的db.person
//第一个参数是模型的名称 转小写再转复数是数据库中保存的时候集合名称
var personModel = mongoose.model('Person',personSchema);
//find 查找方法 第一个参数是查询找范围 第二个参数是回调函数
/*personModel.find({},function(err,docs){
  if(err){
      console.error(err);
  }else{
      console.log(docs);
  }
});*/
// $inc表示在原来基础上递增，只能用于数值类型的字段，字符串等无效
/*personModel.update({username:'赵六'},{$inc:{username:100}},function(err,docs){
    console.log(docs);
});*/
//默认会删除符合条件的所有文档
/*personModel.remove({username:'赵六'},function(err,result){
    console.log(result);
});*/
// model模型    module模块 seajs requirejs webpack commonjs
//保存一个文档
/*
personModel.create({username:'赵六',age:33},function(err,doc){
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }
});*/
var people = [];
for(var i=1;i<=10;i++){
    people.push({age:i,username:'zfpx'+i});
}
//create不但可以传对象，还可以传数组
/*
personModel.create(people,function(err,docs){
    console.log(docs);
})*/

//指定查询结果中要返回的字段
/*personModel.find({},{username:1,_id:0},function(err,docs){
    console.log(docs);
});*/

/*
personModel.findOne({},{username:1,_id:0},function(err,docs){
    console.log(docs);
});
*/
//第一个参数是文档的ID，只需要指定字符串就可以了
/*
personModel.findById('57b91a7c8ec131e805f53bf7',function(err,docs){
    console.log(docs);
})
*/

//大于5，小于7
/*
personModel.find({age:{$gte:5,$lte:7}},function(err,docs){
    console.log(docs);
})
//不等于5
personModel.find({age:{$ne:5}},function(err,docs){
    console.log(docs);
})
//年龄在 1 3 5 之中的一个
personModel.find({age:{$in:[1,3,5]}},function(err,docs){
    console.log(docs);
})
//age=5  或 username zfpx8
personModel.find({$or:[{age:5},{username:'zfpx8'}]},function(err,docs){
    console.log(docs);
})
*/
/*
personModel.update({age:1},{$set:{home:'北京'}},function(err,docs){
    console.log(err);
    console.log(docs);
});
//判断某个字段是否存在
personModel.find({home:{$exists:false}},function(err,docs){
    console.log(docs);
})
*/
// 每页2条，取第三页数据
var pageSize = 2;
var pageNum = 3;

/*
personModel.find()// 按年龄降序排列
    .sort({age:1})
    .skip((pageNum -1)*pageSize)//指定跳过的记录数
    .limit(pageSize)//限定返回的条数
    //在未调用exec方法之前查询并不会真正发往数据库服务器
    .exec(function(err,docs){//docs就是最终返回的查询结果
        console.log(docs);
    });

*/
