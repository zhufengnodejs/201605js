/**
 * function* 代表这是一个生成器函数
 * yield 表示暂停执行,并且产出yield后面跟的值
 * yield 默认没有返回值
 */
function* generator(){
    console.log(1);
    var a = yield 'fdfd';
    console.log(a);
    var b = yield 2;
    console.log(b);
}
var iterator = generator();
//在调用next的时候可以传值，会传递给上一个yield的返回值
//第一个next永远不需传参数
var result = iterator.next();
console.log(result);
var result = iterator.next(555);
console.log(result);
var result = iterator.next('bbb');
console.log(result);