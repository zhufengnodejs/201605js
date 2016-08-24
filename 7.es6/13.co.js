/**
 * 1.写一个生成器并让它自动执行完毕
 * 要求 接收一个数字，返回它的2倍 1 => 2, 2=>4, 返回函数是异步的
 */
function double(val){
  return function(next){
      setTimeout(function(){
          next(val * 2);
      },500);
  }
}
function* read(){
    var one = yield double(1);
    var two = yield double(one);
    var three = yield double(two);
    console.log(three);// 8
}

function co(fn){
    var it = read();///返回一个迭代器
    n();//调用此函数
    function n(val){//声明一个函数
        var result = it.next(val);//得到返回值
        if(!result.done){//表示是否已经迭代完成
            result.value(n);//表示调用此yield函数
        }
    }
}
co(read);