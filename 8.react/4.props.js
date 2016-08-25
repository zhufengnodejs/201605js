var Person = React.createClass({
    //定义属性的名称和类型以及约束
    propTypes:{
        //必须传入name属性，如果不传会报错
        name:React.PropTypes.string.isRequired,
        //必须传入gender属性，如果不传会报错
        gender:React.PropTypes.string.isRequired
    },
    //获取默认属性对象,如果父组件没有传递此属性的话，则使用默认属性
    getDefaultProps(){
        return {name:'无名氏',gender:'男'}
    },
    //用来指定如何渲染此组件
    render(){
        // this.props this指的是当前的组件的实例
        // props指的是当前组件实例的属性的集合对象
        return (
            <h1> {this.props.name}
                {this.props.gender}
            </h1>
        )
    }
});

//把一个Person的实例渲染到appDOM元素内部
//组件属性一般初始化后就不改变了
//组件属性一般是由父组件传进来的,不是由自己定义的
//如果属性特别多，可以解析赋值，把一个对象作为属性传递给一个组件
var attr ={
    name:"李晓霞",
    gender:"女"
}
ReactDOM.render(
    <Person {...attr}/>
    , document.querySelector('#app')
);