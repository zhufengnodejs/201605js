/**
 * 1. 组件名称首字母要大写
 * 定义完组件后，就可以像普通的DOM元素一样使用此组件
 */
var Message = React.createClass({
    //render方法指定了到底如何渲染，渲染什么东西
    render(){
        //能且只能返回一个顶级标签,样式和行为都定义在组件的内部
        return <div><span style={{color:'red'}}>hello</span></div>
    }
});

ReactDOM.render(
    <Message/>,//此处可像使用普通的DOM元素一样使用Message组件
    document.querySelector('#app')
);
ReactDOM.render(
    <Message/>,//此处可像使用普通的DOM元素一样使用Message组件
    document.querySelector('#app2')
);