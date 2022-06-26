const usrReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'remove':
            return [...state.filter((usr) => usr.name != action.payload)];
        default:
            return state
    }
}

export default usrReducer;