import React, { Component } from "react"
import Counter from "../Counter"

class CounterGroup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number: props.number
        }
    }

    render (){
        return (
            new Array(this.state.number).fill(0).map((vale, index) => <Counter key={index} />)
        )
    }
}

export default CounterGroup