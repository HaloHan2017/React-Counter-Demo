import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.setState({number: ++this.state.number})
        this.props['handleIncrease']()
    }

    decrease = () => {
        let number = this.state.number
        if (number <= 0) {
            return false
        }
        this.setState({number: --number})
        this.props['handleDecrease']()
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter 