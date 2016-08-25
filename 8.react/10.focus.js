var Focus = React.createClass({
    handleClick(){
        //通过给子组件添加ref属性，
        //就可以在方法里通过this.refs.属性值得到此DOM元素的引用
        this.refs.myinput.focus();
        //document.getElementById('myinput').focus();
    },
    render(){
        return (
            <div>
                <input type="text" id="myinput" ref="myinput"/>
                <button onClick={this.handleClick}>得到焦点</button>
            </div>
        )
    }
});
ReactDOM.render(
    <Focus/>,
    document.querySelector('#app')
);
