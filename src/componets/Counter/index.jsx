import React from "react"
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            value: nextProps.value
        })
    }

    extracted(num) {
        let currValue = this.state.value + num
        this.setState({
            value: currValue
        })
        if (this.props.increase) {
            this.props.increase(currValue)
        }
        this.changeValue(currValue)
    }

    increase = () => {
        this.extracted(1)
    }

    decrease = () => {
        this.extracted(-1)
    }

    changeValue = (currValue) => {
        if(this.props.changed){
            this.props.changed(currValue)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    changed: PropTypes.func,
    increase: PropTypes.func,
    decrease: PropTypes.func
}

export default Counter