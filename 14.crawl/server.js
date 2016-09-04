var express = require('express');
var Novel = require('./tasks/db').Novel;
var app = express();
app.set('view engine','ejs');
app.set('views',__dirname);
app.get('/',function(req,res){
    Novel.find({}).then(function(novels){
        res.render('index',{
            novels:novels
        });
    }).catch(function(err){
        res.statusCode = 500;
        res.send(err);
    });
});
app.listen(80);

var CronJob = require('cron').CronJob;
//每30分钟一次
var job = new CronJob('1 */30 * * * *',function(){
    process.env.DEBUG= 'crawl:*';
    var child_process = require('child_process');
    var child = child_process.spawn('node',['main.js']);
    child.stdout.on('data',function(data){
        console.log(data)
    });
    child.on('exit',function(){
        console.log('任务执行完毕')
    });
});
job.start();