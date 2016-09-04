var child_process = require('child_process');
var fs = require('fs');
/**
 * curl url 默认会把响应回来的响应体输出到标准输出(控制台)
 *
 */
function download(url){
  var filename = url.split('/').pop();//先得到文件名
  var ws = fs.createWriteStream(filename);//创建可写流
  var child = child_process.spawn('curl',[url]);//创建子进程
  child.stdout.on('data',function(data){
     ws.write(data);
  });
  child.stdout.on('end',function(data){
     ws.end();
  });
}
download('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');