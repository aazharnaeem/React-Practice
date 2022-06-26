import { createContext, useState, useReducer } from 'react'
import notesRedcuer from './noteReducer'


export const notesContext = createContext()
const ContextProvider = (props) => {

    const [notes, dispatch] = useReducer(notesRedcuer, [])


    const addNotes = (data) => {
        dispatch({
            type: 'addNotes',
            payload: data
        });

    }

    const removeNotes = (data) => {
        dispatch({
            type: 'removeNotes',
            payload: data
        });
    }
    // const [notes, setNotes] = useState([
    // ]);

    // const addNotes = (note) => {
    //     setNotes([...notes, note])
    // }
    // const removeNotes = (val) => {
    //     setNotes(
    //         notes.filter((not) => not !== val)

    //     )
    // }
    return (
        <notesContext.Provider value={{ notes, addNotes, removeNotes }} >
            {props.children}
        </notesContext.Provider>
    )
}
export default ContextProvider