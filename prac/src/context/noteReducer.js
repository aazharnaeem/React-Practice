const notesRedcuer = (state, action) => {
    switch (action.type) {
        case 'addNotes':
            return [...state, action.payload];
        case 'removeNotes':
            return [...state.filter(val => val != action.payload)];
        default:
            return state;
    }
}

export default notesRedcuer