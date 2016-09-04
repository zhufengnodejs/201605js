var async = require('async');
var read = require('./read').read;
var save = require('./save').save;
var main = require('debug')('crawl:main');
/**
 * 先读
 * 后写
 */

async.waterfall([
  function(callback){
      main('开始读取小说列表');
      read('http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10',
          callback);
  },
  function(novels,callabck){
      main('开始保存小说列表');
        save(novels,callabck)
  }
],function(err,result){
    main('全部任务执行完毕');
    process.exit(0);
})

