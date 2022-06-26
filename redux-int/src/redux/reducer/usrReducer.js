import { ActionType } from "../constants";


const UserReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.add:
            return [...state, action.payload];
        case ActionType.rem:
            return [...state.filter((sat) => sat.name !== action.payload)]
        default:
            return state
    }
}

export default UserReducer