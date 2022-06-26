import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <NavLink to='/'> Home</NavLink>
            <NavLink to='/about'> About</NavLink>
            <NavLink to='/info'> Info</NavLink>
            <NavLink to='/contact'> Contact</NavLink>

        </div>
    )
}
export default Header