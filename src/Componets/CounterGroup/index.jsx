import React from "react"
import Counter from "../Counter"

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            total: 0
        }
    }

    inputChange = (event) => {
        let value = event.target.value;
        if (value !== '') {
            this.setState({
                number: parseInt(value)
            })
        }
    }

    handleIncrease = () => {
        this.setState( {
            total : this.state.total + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            total : this.state.total - 1
        })
    }

    render() {
        return (
            <div>
                <span>Total &nbsp;&nbsp;&nbsp;&nbsp;of &nbsp;&nbsp;&nbsp;Counters :</span>
                <input type="text" value="0"/>
                <button >calculate</button>
                <br/>
                <span>Number of Counters : </span>
                <input type="text" value={this.state.number} onChange={event => this.inputChange(event)}/>
                {new Array(this.state.number).fill(0).map((vale, index) => <Counter key={index}
                    handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease}/>)}
            </div>
        )
    }
}

export default CounterGroup