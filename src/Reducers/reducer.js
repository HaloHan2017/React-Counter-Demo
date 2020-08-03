import {DECREASE, INCREASE} from "../Actions/action";

const changeValue = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREASE:
            return {value: state.value + 1}
        case DECREASE:
            return {value: state.value - 1}
        default:
            return state
    }
}

export default changeValue