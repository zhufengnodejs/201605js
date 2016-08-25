var Double = React.createClass({
    //定义初始状态
    getInitialState(){
        return {value:'123'}
    },
    //当input的值发生改变的时候执行此函数
    handleChange(event){//事件处理函数有一个形参叫event表示事件对象
        //取得当前事件源的值然后赋给状态对象的value属性
        this.setState({value:event.target.value});
    },
    render(){
        //都绑定到了当前的组件的value属性
        return (
            <div>
                <input type="text" value={this.state.value}
                onChange={this.handleChange}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Double/>,
    document.querySelector('#app')
);
