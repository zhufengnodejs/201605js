/**
 * 1.渲染的组件有且只能有一个顶级标签(顶级元素)
 */
//声明一个普通的JS的数组
var names = ['张龙','赵虎','王朝'];
var style = {color:'red'};
ReactDOM.render(
    //有且只能一个顶级元素
    <div>
        { //由是遇到{}以JS语法来进行解析
            //如果是迭代一个数组的话，每个子元素都需要有一个独一无二的key属性
            names.map(function(item,index){
                //如果要指定样式的话，需要让属性指向一个JS对象
                return <div className="green" style={style} key={index}>{item}</div>
            })
        }
    </div>,
    document.querySelector('#app')
);