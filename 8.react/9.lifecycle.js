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
    handleClick(){
        this.setState({count:this.state.count+1});
    },
    shouldComponentUpdate(){
        console.log('6. 询问此组件是否需要更新 shouldComponentUpdate');
        if(this.state.count>=10){//如果 count>=10,不要再更新了
            return false;
        }else{
            return true;
        }
    },
    componentWillUpdate(){
        console.log('7. 组件将要更新 componentWillUpdate');
    },
    componentDidUpdate(){
        console.log('8. 组件完成更新 componentDidUpdate');
    },
    //将此组件从其父容器中移除掉
    remove(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
    },
    componentWillUnmount(){
        console.log('9. 组件将要销毁 componentWillUnmount');
    },
    render(){
        console.log('4. 将此组件渲染到界面上 render');
        return (
            <div>
                {this.props.name}:{this.state.count}
                <button onClick={this.handleClick}>加1</button>
                <button onClick={this.remove}>移除</button>
            </div>
        )
    },
    componentDidMount(){
        console.log('5. 此组件渲染到界面之后 componentDidMount');
    }
});

ReactDOM.render(
    <Counter count={3}/>,
    document.querySelector('#app')
);