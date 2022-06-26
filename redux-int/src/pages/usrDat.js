import { useDispatch, useSelector } from "react-redux"
import { rem } from "../redux/action/UsrAction"
const UsrDat = () => {

    const user = useSelector(state => state.user)
    console.log(user)    
    const dispatch= useDispatch()
    return (
        <div>
            {user.map((val, ind) => {
                return (
                    <div key={ind}>
                        {val.name}
                        <br />
                        {val.age}
                        <br />
                        {val.pass}
                        <br />
                        <button onClick={()=>dispatch(rem(val))}>rem</button>
                    </div>
                )

            })}
        </div>
    )
}

export default UsrDat