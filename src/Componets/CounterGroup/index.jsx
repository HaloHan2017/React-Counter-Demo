import React from "react"
import Counter from "../Counter"

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
    }

    inputChange = (event) => {
        let value = event.target.value;
        if (value !== '') {
            console.log(value)
            this.setState({
                number: parseInt(value)
            })
        }
    }

    render() {
        return (
            <div>
                <span>Number of Counters : </span>
                <input type="text" value={this.state.number} onChange={event => this.inputChange(event)}/>
                {new Array(this.state.number).fill(0).map((vale, index) => <Counter key={index}/>)}
            </div>
        )
    }
}

export default CounterGroup