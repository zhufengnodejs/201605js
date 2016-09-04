var cheerio = require('cheerio');
var content = `
<div class="hd">
    <h2 data="353" class="title title-blue">
      <a href="./buzz?b=353&c=10">玄幻奇幻</a>
    </h2>
    <a class="more" href="./buzz?b=353&c=10">更多 &gt;</a>
</div>
<div class="hd">
    <h2 data="355" class="title title-brown"><a href="./buzz?b=355&c=10">都市言情</a></h2>
    <a class="more" href="./buzz?b=355&c=10">更多 &gt;</a>
</div>`;
/**
 * [{id:353,name:'玄幻奇幻',href:'/buzz?b=353&c=10'}
 * ,{id:355,name:'都市言情',href:'/buzz?b=355&c=10'}]
 */

var $ = cheerio.load(content);
//迭代每个A标签
var items = [];
$('.hd h2 a').each(function(){
    var $me = $(this);//把每个A标签DOM元素转成jquery对象
    var item = {
        name:$me.text(),
        href:$me.attr('href')// ./buzz?b=353&c=10
    }
    var result = item.href.match(/b=(\d+)/);
    if(result){
        //console.log(result);//[匹配到的字符串,第一个分组]
        item.id = parseInt(result[1]);
    }
    items.push(item);
});
console.log(items);