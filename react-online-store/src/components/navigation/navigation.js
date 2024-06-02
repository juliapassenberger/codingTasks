import './navigation.css'
import { NavLink } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { useGlobalState } from '../../state';
import logo from '../../images/logos/logo-name.png';


export default function Nav() {

    // Use global state variables for user name and logged in status
    const [isLoggedIn,] = useGlobalState('isLoggedIn');
    const [userName,] = useGlobalState('userName');

    // use location hook to identify whether user is on home page or not -> apply different styling
    const location = useLocation();
    const onHomePage = location.pathname === '/';


    return (

        // Conditional navbar styling for home page vs other pages
        <div className={onHomePage ? 'navbar-home' : 'navbar-default'}>

            {/* Brand logo top left */}
            <div className='logo'>
                <img id='logo' src={logo} alt='Shalour logo' />
            </div>


            {/* Navigation links in the middle of the nav bar */}
            <div className='primary-navigation'>
                <NavLink className={({ isActive }) => isActive ? 'nav-links link-active' : 'nav-links'} end to="/">HOME</NavLink>
                <span> . </span>
                <NavLink className={({ isActive }) => isActive ? 'nav-links link-active' : 'nav-links'} to="/products">PRODUCTS</NavLink>
                <span> . </span>
                <NavLink className={({ isActive }) => isActive ? 'nav-links link-active' : 'nav-links'} to="/about">ABOUT</NavLink>
            </div>


            {/* Other links (non-functional) on the right of the nav bar */}
            <div className='secondary-navigation'>
                <div><FaMagnifyingGlass /></div>
                <div><FaBell /></div>
                {/* If the user is 'loggedIn' display welcome + name, otherwise 'Login' */}
                {isLoggedIn ? <div>Welcome {userName}</div> : <div>Login </div>}
                <div><FaAngleDown /></div>
            </div>
        </div >
    )
}
