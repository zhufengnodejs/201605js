var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/201605js');
//定义课程集合
var courseSchema = new mongoose.Schema({
    name: String
})
//根据schema创建模型
var courseModel = mongoose.model('Course', courseSchema);
//再创建一个学生的schema
var studentSchema = new mongoose.Schema({
    name: String,
    age:Number,
    course: {
        type: mongoose.Schema.Types.ObjectId,//类型是对象ID类型
        ref: 'Course'//表示此对象主键引用的是哪个Model模型
    }
})
//在保存之前执行中间件 next表示继续执行，调用下一个中间件
studentSchema.pre('save',function(next){
    var self = this;
    setTimeout(function(){
        //self.age = self.age*3;
        console.log('pre save');
    },5000);
    next();
});
var studentModel = mongoose.model('Student', studentSchema);
courseModel.create({
    name: 'node.js'
}, function (err, course) {
    //{_id:xxxxx,name:'node.js'}
    studentModel.create({
        name: '张三',
        age:10,
        //保存的时候只需要保存课程的主键即可
        course: course._id
    }, function (err, student) {
        /*studentModel.findById(student._id,function(err,doc){
            courseModel.findById(doc.course,function(err,c){
                doc.course = c;
                console.log(doc);
            })

        })*/
        //populate 方法负责把ID转成对象 参数是文档的属性名称 就是写外键的名称
        studentModel.findById(student._id).populate('course')
            //exec表示一切就绪，准备工作都做好了，可以真正向数据库发起查询了
            .exec(function(err,doc){
            console.log(doc);
        });
    })
})
