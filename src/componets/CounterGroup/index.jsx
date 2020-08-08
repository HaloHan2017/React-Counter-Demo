import React from "react"
import Counter from "../Counter"

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChangeCounterValue = (value, index) => {
        this.props.changeCounterValue({value, id: index})
        this.props.calculateSum()
    }

    changeTheNumberOfCounters = (event) => {
        let numberOfCounters = event.target.value > 0 ? event.target.value : 0;
        this.props.changeNumberOfCounters(numberOfCounters)
        this.props.resetCounterArray()
    }

    render() {
        return (
            <div>
                <span>Total &nbsp;&nbsp;&nbsp;of &nbsp;&nbsp;&nbsp;Counters :</span>
                <input type="text" value={this.props.sum}/>
                <br/>
                <span>Number of Counters : </span>
                <input type="text" value={this.props.counterArray.length} onChange={this.changeTheNumberOfCounters}/>
                {this.props.counterArray.map((value, index) =>
                    <Counter value={value} key={index}
                             changed={(value) => {
                                 this.handleChangeCounterValue(value, index)
                             }}/>)}
            </div>
        )
    }
}

export default CounterGroup