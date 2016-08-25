var mymix = {
    getInitialState(){//获取默认状态
        return {count: 0};
    },
    handleClick(){//处理点击事件
        this.setState({count: this.state.count + 1});
    }
}
var Counter1 = React.createClass({
    //混合可以实现逻辑的复用
    mixins:[mymix],
    render(){
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>点我加1</button>
            </div>
        )
    }
});
var Counter2 = React.createClass({
    mixins:[mymix],
    render(){
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>点我加1</button>
            </div>
        )
    }
});
ReactDOM.render(
    <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
    </div>,
    document.querySelector('#app')
);