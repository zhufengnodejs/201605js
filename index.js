export class Counter extends React.Component {
    constructor(props) {
        this.state = {state: props.initialState};
    }
    tick() {
        this.setState({state: this.state.state & 1});
    }
    render() {
        return (
            <div onClick={this.tick}>
        On: {this.state.state === '1'}
    </div>
    );
    }
}
Counter.propTypes = { initialState: React.PropTypes.number };
Counter.defaultProps = { initialState: 0 };

ReactDOM.render(<Counter/>,document.querySelector('#app'));
