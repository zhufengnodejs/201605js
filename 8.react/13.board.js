var Board = React.createClass({
    getInitialState(){
      return {messages:this.props.messages};
    },
    handleClick(event){//处理点击事件
        event.preventDefault();
        var value = this.refs.txtMsg.value;
        this.state.messages.push(value);
        localStorage.setItem('messages',JSON.stringify(this.state.messages));
        //修改状态一定要通过setState.因为setState是一个异步方法，
        //而且会在状态修改后尝试尝试视图 ['a','b']
        this.setState({messages:this.state.messages},function(){
            //当设置完状态之后会调用回调函数
            this.refs.txtMsg.value = '';
        });

    },
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <form>
                        <div className="form-group row">
                            <div className="col-xs-10">
                                <input type="text" className="form-control" ref="txtMsg"/>
                            </div>
                            <div className="col-xs-2">
                                <button className="btn btn-primary" onClick={this.handleClick}>留言</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.messages.map((item,index)=><li className="list-group-item" key={index}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
//localStorage是一个window全局变量。
// setItem(key,value) getItem(key)
var messages = localStorage.getItem('messages');
messages = messages?JSON.parse(messages):[];

ReactDOM.render(<Board messages={messages}/>,document.querySelector('#app'));