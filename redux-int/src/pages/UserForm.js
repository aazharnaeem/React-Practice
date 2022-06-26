import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/action/UsrAction';

const Userform = () => {
    const [usr, Setusr] = useState({}
        // {
        //     name: '',
        //     age: 0,
        //     pass: ''
        // }
    )
    const dispatch= useDispatch()
    const ChangeHandler = (e) => {
        const value = e.target.value;

        Setusr({
            ...usr,
            [e.target.name]: value
        })
    }

    const Submit = (e) => {
        e.preventDefault();
        dispatch(add(usr))
    }
    return (
        <div>
            <h3>User FORM</h3>


            <form onSubmit={Submit} >
                <input
                    type='text'
                    name='name'
                    value={usr.name}
                    onChange={(e) => { ChangeHandler(e) }} />

                <input
                    type='text'
                    name='age'
                    value={usr.age}
                    onChange={(e) => { ChangeHandler(e) }} />

                <input
                    type='text'
                    name='pass'
                    value={usr.pass}
                    onChange={(e) => { ChangeHandler(e) }} />

                <input type='submit' value='submit' />
            </form>

        </div>
    )
}

export default Userform