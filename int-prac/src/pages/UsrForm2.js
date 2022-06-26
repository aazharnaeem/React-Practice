import react, { useContext, useState  } from 'react';
import { NewUserContext } from '../context/userContRed';
const NewForm = () => {

    const { add } = useContext(NewUserContext);
    const [data, setData] = useState({
        name: '',
        age: 0,
        password: ''
    })
    const changeHandler = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }
    const submit = (e) => {
        e.preventDefault()
        add(data)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type={'text'}
                    placeholder='name'
                    name='name'
                    value={data.name}
                    onChange={(e) => changeHandler(e)}
                />
                <br />
                <br />
                <input
                    type={'number'}
                    placeholder='age'
                    name='age'
                    value={data.age}
                    onChange={(e) => changeHandler(e)}
                />
                <br />
                <br />
                <input
                    type={'password'}
                    placeholder='password'
                    name='password'
                    value={data.password}
                    onChange={(e) => changeHandler(e)}
                />
                <br />
                <input type='submit' value={'submit'} />
            </form>
        </div>
    )

}
export default NewForm