var CronJob = require('cron').CronJob;
//秒 分钟 小时 日期 月 星期
// 每1月 3号(必须得是周1) 1点 12 分 每5秒执行一次
var job = new CronJob('*/5 12 1 3 1 1', function () {
    console.log(new Date().toLocaleString());
})
job.start();