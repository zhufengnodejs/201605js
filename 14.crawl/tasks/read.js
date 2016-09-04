var request = require('request');
var iconv = require('iconv-lite');
var fs = require('fs');
var cheerio = require('cheerio');
/**
 * 接收一个url http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10
 * 返回一个novels 小说对象的数组 [{name:'xx',url:'yy'}]
 **/
var read = require('debug')('crawl:read');
exports.read = function(url,callback){
    /**
     * 1.读取接口
     * 2. 分析得到的数据并用cheerio得到数据
     * 3. 拼装成对象数组并返回
     */
    request({
        url:url,
        encoding:null
    },function(err,response,body){
        if(err)
          return callback(err);
        var content = iconv.decode(body,'gbk');
        //fs.writeFile('novel.html',content);
        var $ = cheerio.load(content);
        var items = [];
        $('.keyword .list-title').each(function(){
            var $me = $(this);
            var item = {
                name:$me.text(),
                url:$me.attr('href')
            }
            read('读取小说:'+item.name);
            items.push(item);
        });
        read('读取小说列表完成:');
        callback(null,items);
    })
}

/*
exports.read('http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10',function(err,novels){
   console.log(novels);
});*/
