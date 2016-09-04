var child_process = require('child_process');
var fs = require('fs');
/**
 * curl url 默认会把响应回来的响应体输出到标准输出(控制台)
 *
 */
function download(url){
  var filename = url.split('/').pop();//先得到文件名
  //直接指定完整的参数 -o表示指定保存的文件名路径
    /**
     * spawn 只要子进程有了标准输出，会马上以流的方式传递给主进程
     * exec 子进程有了标准输出不会立刻传递给主进程，而会收集起来，等待子进程完全
     * 结束终止后才会把所有的标准输出传给回调函数
     */
  var child = child_process.exec(`curl ${url} -o ${filename}`,function(err,stderr,stdout){
      console.log(stdout);
  });//创建子进程
}
download('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');