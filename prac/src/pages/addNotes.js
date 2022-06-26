import { notesContext } from '../context/noteContext'
import { useContext, useState } from 'react';

const AddNotes = () => {
    const { notes, addNotes, removeNotes } = useContext(notesContext)

    const [note, setnote] = useState(
        {
            title: '',
            type: '',
            desc: ''
        }
    )
    const changeHandler = (e) => {
        const value = e.target.value
        setnote(
            {
                ...note,
                [e.target.name]: value,
            }
        )
    }

    const submit = (e) => {
        e.preventDefault();
        changeHandler(e)
        addNotes(note)
    }
    return (
        <div>

            <form onSubmit={submit}>

                <input type='text' placeholder='title' name='title' onChange={(e) => changeHandler(e)} />
                <input type='text' placeholder='type' name='type' onChange={(e) => changeHandler(e)} />
                <input type='text' placeholder='desc' name='desc' onChange={(e) => changeHandler(e)} />
                <input type='submit' value='submit' />

            </form>
            <h1>Notes</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Desc</th>
                        <th >Type</th>
                    </tr>
                </thead>
                {
                    notes.map((val, ind) => {
                        return (
                            <tr key={ind}>
                                {
                                    Object.keys(val).map((value, index) => {

                                        return (
                                            <th key={index}>{val[value]}</th>
                                        )
                                    })
                                }
                                <button onClick={(e) => removeNotes(val)} >rem</button>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    )
}

export default AddNotes;