import { useGlobalState } from "../../state";

export default function LoggedIn(props) {

    // Import global state variables for user name and login status
    const [, setIsLoggedIn] = useGlobalState('isLoggedIn');
    const [userName, setUserName] = useGlobalState('userName');

    // Logout function 
    // Resets user name and sets login to false
    const logout = () => {
        setUserName("");
        setIsLoggedIn(false);
    }

    return (

        <div className="login-items">

            {/* Display Welcome & user name */}
            <h2 className="home-top-field">{`Welcome, \n ${userName}!`}</h2>

            {/* Call Logout function on click of logout button */}
            <button className="login-button home-bottom-field" onClick={logout}>LOGOUT</button>

        </div>

    )
}