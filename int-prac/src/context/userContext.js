import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = (props) => {
    const [usr, setData] = useState([
        // {
        //     name: 'azhar',
        //     age: 22,
        //     password: 'azhar123'
        // }
    ])

    const add = (dat) => {
        setData([
            ...usr,
            dat
        ])
    }
    const rem = (dat) => {
        setData(
            usr.filter((usr) => usr.name !== dat.name)
        )
    }

    console.log(usr)
    return (
        <UserContext.Provider value={{ usr, setData, add, rem }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default ContextProvider