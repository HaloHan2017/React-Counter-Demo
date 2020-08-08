import {CALCULATE_SUM, CHANGE_COUNTER_VALUE, CHANGE_NUMBER_OF_COUNTERS, RESET_COUNTER_ARRAY} from "../actions/action";

const reducer = (state = {counterArray: new Array(1).fill(0), sum: 0, count: 0}, action) => {
    let counterArr = state.counterArray
    let tempSum = 0
    switch (action.type) {
        case CHANGE_COUNTER_VALUE:
            counterArr[action.data.id] = action.data.value
            break
        case CALCULATE_SUM:
            tempSum = counterArr.reduce((result, counter) => {
                return result += counter
            }, 0)
            break
        case RESET_COUNTER_ARRAY:
            counterArr = new Array(counterArr.length).fill(0)
            break
        case CHANGE_NUMBER_OF_COUNTERS:
            counterArr = new Array(0)
            for (let i = 1; i <= action.number; i++){
                counterArr.push(0)
            }
            break
        default :
            return state
    }
    return {counterArray: counterArr, sum: tempSum, count: state.count}
}
export default reducer