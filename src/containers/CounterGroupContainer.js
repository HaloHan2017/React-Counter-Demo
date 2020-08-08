import * as action from "../actions/action";
import {connect} from "react-redux";
import CounterGroup from "../componets/CounterGroup";

const mapStateToProps = (state) => ({
    counterArray: state.counterArray,
    count: state.count,
    sum: state.sum
})

const mapDispatchToProps = (dispatch) => ({
    changeCounterValue: (data) => dispatch(action.changeCounterValue(data)),
    calculateSum: () => dispatch(action.calculateSum()),
    resetCounterArray: () => dispatch(action.resetCounterArray()),
    changeNumberOfCounters: (number) => dispatch(action.changeNumberOfCounters(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)