/*
var sum =0;
for(var i=0;i<=10;i++){
    sum += i;

}
//指的是向标准输出进行输出 标准输出就是控制台
console.log('sum:',sum);*/
var index = 0;
setInterval(function(){
    console.log('子进程当前时间',new Date().toLocaleString());
    if(index++>=10)
      process.exit(0);//退出当前进程 结束当前进程
},1000)
// pm2    pm2.5