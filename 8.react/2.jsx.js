/**
 * 1.渲染的组件有且只能有一个顶级标签(顶级元素)
 */
//声明一个普通的JS的数组
var names = ['张龙','赵虎','王朝'];
ReactDOM.render(
    //有且只能一个顶级元素
    <div>
        { //由是遇到{}以JS语法来进行解析
            names.map(function(item){
                return <div>{item}</div>
            })
        }
    </div>,
    document.querySelector('#app')
);