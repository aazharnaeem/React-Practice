import react,{useContext} from 'react';
import { UserContext } from '../context/userContext';
import { NewUserContext } from '../context/userContRed';
const UsrFrm =()=>{
    // const {usr, rem} = useContext(UserContext)
    const {usr, rem} = useContext(NewUserContext)
    console.log(usr)
    return(
        <div>
            {usr.map((val,ind)=>{
                return(
                    <>
                    <h3>
                    {val.name}
                    </h3>
                    <h3>
                        {val.age}
                    </h3>
                    <h3>
                        {val.password}
                    </h3>
                    <button onClick={()=>rem(val)}>  reamove</button>
                    </>
            )
            })}

        </div>

    )
}
export default UsrFrm