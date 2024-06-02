import './navigation.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


function Nav() {

    return (


        <div className='Navbar'>
            {/* Left side of the navigation */}
            {/* No links implemented */}
            <div className='primary-navigation'>
                <div id='logo'>Netflix</div>
                <div>Home</div>
                <div>Series</div>
                <div>Films</div>
                <div>News & Popular</div>
                <div>My List</div>
                <div>Browse by Languages</div>
            </div>

            {/* Left side of the navigation with some imported icons */}
            <div className='secondary-navigation'>
                <div><FaMagnifyingGlass /></div>
                <div>Children</div>
                <div><FaBell /></div>
                <div id='account'></div>
                <div><FaAngleDown /></div>
            </div>
        </div>
    )
}

export default Nav;