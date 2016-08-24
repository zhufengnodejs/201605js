/**
 * 生成器是一个函数，需要加*
 * //项目过程
 * // 需求分析 => 需求文档.doc
 * // 产品设计 => 设计文档.doc
 * // 软件开发 => 项目代码
 * // 测试阶段 => 测试报告
 * @param books
 */
function* read() {
    console.log(1);
    yield 'node';//产出
    console.log(2);
    yield 'js';
    console.log(3);
    yield 'java';
}
//iterator就是迭代器
//每调用一次next，函数体会往下执行一次，执行到下一个yield或函数结束为止
//每一次的yield后面的值就是返回值中的value
var iterator = read();
var res1 = iterator.next();// {value:'node',done:false}
console.log(res1);
var res1 = iterator.next();// {value:'node',done:false}
console.log(res1);
var res1 = iterator.next();// {value:'node',done:false}
console.log(res1);
var res1 = iterator.next();// {value:'node',done:false}
console.log(res1);