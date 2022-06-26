import { combineReducers } from "redux"
import UserReducer from "./usrReducer"


const rootReducer = combineReducers({
    user:UserReducer
})

export default rootReducer