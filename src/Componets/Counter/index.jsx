import React from "react"
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     number: 0
        // }
    }

    // increase = () => {
    //     // this.setState({number: ++this.state.number})
    //     this.props['handleIncrease']()
    // }
    //
    // decrease = () => {
    //     // let number = this.state.number
    //     // if (number <= 0) {
    //     //     return false
    //     // }
    //     // this.setState({number: --number})
    //     this.props['handleDecrease']()
    // }

    render() {
        const {value, onIncreaseClick, onDecreaseClick} = this.props
        return (
            <div>
                {/*<button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>*/}
                <button onClick={onIncreaseClick}>+</button>
                <mark>{value}</mark>
                <button onClick={onDecreaseClick}>-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}

export default Counter