var Suggestion = React.createClass({
    //设置初始状态
    getInitialState(){
      return {items:[]}
    },
    //当文本框发生改变的时候执行的函数
    handleChange(event){
        //1. 获取文本框的内容，2.并且调用百度的接口，获取结果，并显示在列表组上
        var keyword = event.target.value;
        $.ajax({
            //url:'https://www.baidu.com/su',//请求的URL地址
            url:'http://localhost:9090/jsonp',//请求的URL地址
            type:'GET',//请求的方法
            data:{wd:keyword},//要传递的参数对象
            processData:true,//为true表示会把参数对象序列化成查询字符中追加到url后面
            jsonp:'cb',//指定服务器中获取调用方法的参数名
            dataType: 'jsonp',//指定数据类型是jsonp,会把外层的方法调用去掉，把里面的JSON字符串转成对象传给success方法
            context:this,//指定回调函数中的this指针
            success:function(data){//如果调用接口成功则进行回调
              var result = data.s;
              result = result.map((item,index)=><li className="list-group-item" key={index}>{item}</li>);
              this.setState({items:result});
            }
        })
    },
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <input onChange={this.handleChange} type="text" className="form-control"/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.items}
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggestion/>,document.querySelector('#app'));