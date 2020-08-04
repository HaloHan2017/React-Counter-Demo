import {DECREASE, INCREASE} from "../actions/action";

const reducer = (state = {count: 0}, action) => {
    let count = state.count
    switch (action.type) {
        case INCREASE:
            return {count: count + 1}
        case DECREASE:
            return {count: count - 1}
        default :
            return state
    }
}
export default reducer