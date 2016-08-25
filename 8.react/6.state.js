var Person = React.createClass({
    /**
     * 1. 状态只能由内部产生,可以getInitialState来定义初始化状态
     * 2. 状态只能由内部发生改变
     * 2. 当状态变化之后会重新渲染页面
     */
    getInitialState(){
        //返回初始状态，默认属性happy为true
        return {happy:true}
    },
    //当点击按钮的时候执行此方法
    handleClick(){
        //设置新的状态
        //设置新的状态之后会重新渲染视图
        this.setState({happy:!this.state.happy});
    },
    render(){
        console.log('render...............');
        // this.state可以获得状态对象
        var heart = this.state.happy?'开心':'难过';
        return (
            <div>
                {this.props.name} {heart}
                <button onClick={this.handleClick} >改变心情</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Person name="原爱"/>,
    document.querySelector('#app')
);