import {decreaseAction, increaseAction} from "../actions/action";
import Counter from "../componets/Counter";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = (dispatch) => ({
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)