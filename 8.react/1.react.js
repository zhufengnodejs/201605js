/**
 * ReactDOM是引入react-dom.js之后挂在全局对象下的属性
 * 有一个render方法,负责把一个元素插入到某个DOM元素的内部
 * 第一个参数是 虚拟DOM
 * 第二个参数是指要被插入的元素
 */
ReactDOM.render(
    <h1>hello</h1>,
    document.querySelector('#app')
);