import React from "react"
import PropTypes from 'prop-types'

class Counter extends React.Component {
    render() {
        const {count, onIncreaseClick, onDecreaseClick} = this.props
        console.log(this.props)
        return (
            <div>
                <button onClick={onIncreaseClick}>+</button>
                <mark>{count}</mark>
                <button onClick={onDecreaseClick}>-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}

export default Counter