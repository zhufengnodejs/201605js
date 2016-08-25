var Counter = React.createClass({
    //1. 加载前
    //获取默认属性 它会返回一个对象，这个对象的属性会合并到this.props上
    getDefaultProps(){
        console.log('1. 获取默认属性 getDefaultProps');
        //如果原来的从父组件传递过来的this.props对象上有此属性，则不赋值
        //如果没有此属性则用此初始值填充
        return {name:'zfpx'};
    },
    //定义初始状态 状态可以从属性中获取
    getInitialState(){
        console.log('2. 获取默认状态 getInitialState');
        return {count:this.props.count}
    },
    componentWillMount(){
        console.log('3. 此组件将要被渲染到界面上 componentWillMount');
    },
    render(){
        console.log('4. 将此组件渲染到界面上 render');
        return (
            <div>
                {this.props.name}:{this.state.count}
                <button onClick={this.handleClick}>加1</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Counter count={3}/>,
    document.querySelector('#app')
);