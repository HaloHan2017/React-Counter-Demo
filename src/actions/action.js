export const CHANGE_COUNTER_VALUE = "CHANGE_COUNTER_VALUE"
export const CALCULATE_SUM = "CALCULATE_SUM"
export const RESET_COUNTER_ARRAY = "RESET_COUNTER_ARRAY"
export const CHANGE_NUMBER_OF_COUNTERS = "CHANGE_NUMBER_OF_COUNTERS"

export const changeCounterValue = (data) => ({
    type: "CHANGE_COUNTER_VALUE",
    data
})

export const calculateSum = () => ({
    type: "CALCULATE_SUM"
})

export const resetCounterArray = () => ({
    type: "RESET_COUNTER_ARRAY"
})

export const changeNumberOfCounters = (number) => ({
    type: "CHANGE_NUMBER_OF_COUNTERS",
    number
})

