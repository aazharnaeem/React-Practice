import react,{ useState, useContext } from 'react';
import { UserContext } from '../context/userContext';
const Userform = () => {
    const [data, setData]= useState({
        name:'',
        age:0,
        password:''
    })
    const {add} =useContext(UserContext)

    const changeHandler=(e)=>{
        const value =e.target.value
        setData({
            ...data,
            [e.target.name]:value
        })
    }
    const submit=(e)=>{
        e.preventDefault()
        add(data)
    }
    return (
        <div>
            <h1>User Form</h1>
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

export default Userform