import { add , rem} from "../redux/user"
import { useSelector, useDispatch } from "react-redux"

const User =()=>{

    const user = useSelector(state=> state.user)
    
    const dispatch= useDispatch()
    
    return(
        <div>
                <button onClick={()=>dispatch(add({name:'azhar'}))+console.log(user)} >Add</button>
            <h1>users</h1>
            {user.map((val,ind)=>{
                return(
                    <div key={ind}>
                        {val.name}
                        <button onClick={()=>dispatch(rem(val))} >rem</button>
                    </div>
                )
            })}
        </div>
    )
}

export default User