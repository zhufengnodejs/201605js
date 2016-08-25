var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-primary">
                <PanelHead content={this.props.heading}></PanelHead>
                <PanelBody content={this.props.body}></PanelBody>
                <PanelFooter content={this.props.footer}></PanelFooter>
            </div>
        )
    }
});
var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">
                {this.props.content}
            </div>
        )
    }
});

var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.content}
            </div>
        )
    }
});

var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">
                {this.props.content}
            </div>
        )
    }
});
var panel1 = {
    heading:'我是面板1的头部',
    body:'我是面板1的身体',
    footer:'我是面板1的尾部'
}
ReactDOM.render(
    <Panel {...panel1}/>,
    document.querySelector('#app')
);
var panel2 = {
    heading:'我是面板2的头部',
    body:'我是面板2的身体',
    footer:'我是面板2的尾部'
}
ReactDOM.render(
    <Panel {...panel2}/>,
    document.querySelector('#app2')
);