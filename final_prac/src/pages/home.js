import { useState } from "react";

const Home = () => {

    const { data, setData } = useState(
        {
            name: '',
            email: '',
            time: '',
        }
    );

    const changeHandler = (e) => {

        const value = e.target.value
        // console.log(e.target.name)

        setData(
            {
                // ...data,
                [e.target.name]: value
            }
        )

    }
    const submit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div>
            <h2>Enter Information</h2>


            <form onSubmit={submit}>
                <table>
                    <tr>
                        <td>
                            <label>Name</label>
                        </td>
                        <td>
                            <label>Email</label>
                        </td>
                        <td>
                            <label for='time'>Time</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='text' name='name' onChange={(e) => changeHandler(e)} />
                        </td>
                        <td>
                            <input type='email' name='email' onChange={(e) => changeHandler(e)} />
                        </td>
                        <td>
                            <input type='time' name='time' onChange={(e) => changeHandler(e)} />
                        </td>
                        <td>
                            <input type='submit' value='submit' />
                        </td>
                    </tr>
                </table>
            </form>

        </div>
    )
}

export default Home;