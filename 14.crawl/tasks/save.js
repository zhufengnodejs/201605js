var Novel = require('./db').Novel;
var async = require('async');
var save = require('debug')('crawl:save');
//把小说对象的数组保存在数据库里
exports.save = function(items,callback){
    async.forEach(items,function(item,cb){
        save('保存小说'+item.name);
        Novel.create(item,cb)
    },callback)
}

///exports.save([{name:'1',url:'url1'},{name:'2',url:'url2'}]);