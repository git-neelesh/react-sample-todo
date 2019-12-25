import React from 'react'
import { connect } from 'react-redux'
class Counter extends React.Component {
    state = {
        counter: 10
    }
    render() {
        return <div>
            Counter app {this.props.ctr}
            <br />
            <button onClick={this.props.onDisptachIncCounter}>Increment</button> |
        <button onClick={this.props.onDisptachDecCounter}>Decrement</button>
        </div>
    }
}
const mapStateToProp = state => {
    return {
        ctr: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onDisptachIncCounter: () => dispatch({ type: 'INCR' }),
        onDisptachDecCounter: () => dispatch({ type: 'DEC' })
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Counter)