import { ActionType } from "../constants";



export const add = (dat) => {
    return {
        type: ActionType.add,
        payload: dat
    }
}

export const rem = (dat) => {
    return {
        type: ActionType.rem,
        payload: dat.name
    }
}