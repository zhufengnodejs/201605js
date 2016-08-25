var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-primary">
                <PanelHead heading={this.props.heading}></PanelHead>
                <PanelBody body={this.props.body}></PanelBody>
                <PanelFooter footer={this.props.footer}></PanelFooter>
            </div>
        )
    }
});
var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">
                {this.props.heading}
            </div>
        )
    }
});

var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        )
    }
});

var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">
                {this.props.footer}
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