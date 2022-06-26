import { createContext, useReducer } from "react";
import usrReducer from "./usrReducer";


export const NewUserContext = createContext()

const NewContextProvider = (props) => {
    const [usr, dispatch] = useReducer(usrReducer, [])
   
    const add = (dat) => {
        dispatch({
            type: 'add',
            payload: dat
        })
    }

    const rem = (dat) => {
        dispatch({
            type: 'remove',
            payload: dat.name
        })
    }
    console.log(usr)

    return (
        <NewUserContext.Provider value={{ usr, add, rem }}>
            {props.children}
        </NewUserContext.Provider>
    )
}
export default NewContextProvider