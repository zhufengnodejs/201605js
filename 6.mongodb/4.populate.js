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
    course: {
        type: mongoose.Schema.Types.ObjectId,//类型是对象ID类型
        ref: 'Course'//引用课程的主键,它就是外键
    }
})
var studentModel = mongoose.model('Student', studentSchema);
courseModel.create({
    name: 'node.js'
}, function (err, course) {
    studentModel.create({
        name: '张三',
        course: course._id
    }, function (err, student) {
        studentModel.findById(student._id,function(err,doc){
            console.log(doc);
        })
    })
})
