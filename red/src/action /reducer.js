
const initial = 0;
const incReducer = (state = initial, action) => {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'rem':
            return state - 1
        default:
            return state
    }
}

export default incReducer