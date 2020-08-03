import {decreaseAction, increaseAction} from "../Actions/action";
import Counter from "../Componets/Counter";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    value: state.value
}

const mapDispatchToProps = (dispatch) => ({
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction())
})

const CounterApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterApp