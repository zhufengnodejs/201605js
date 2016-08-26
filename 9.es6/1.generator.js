/**
 * 生成器是可以用来生成迭代器的函数
 * 生成器内部的运行分为若干个阶段，每个阶段都能生产出来一些东西
 * 开发一个项目
 * 1 需求分析 -> 需求文档.doc 都会暂停一下
 * 2 概要设计 -> 设计文档.doc
 * 3 编码    -> 项目代码.doc
 * 4 测试    -> 测试报告.doc
 * 5 上线验证 -> 验证报告.doc
 */
function generator(stages){
    //返回一个迭代器对象,生成迭代数组
    let index = 0;
    return {
        //执行下一步骤
        next(){
          return {
              value:stages[index++], //当前阶段的返回值
              done:index>stages.length //迭代是否已经完成
              //如果说当前索引已经大于最大长度了，表示迭代完成
          }
        }
    }
}

var iterator = generator(['需求分析','概要设计','编码']);
var res1 = iterator.next();
console.log(res1);
var res1 = iterator.next();
console.log(res1);
var res1 = iterator.next();
console.log(res1);
var res1 = iterator.next();
console.log(res1);
