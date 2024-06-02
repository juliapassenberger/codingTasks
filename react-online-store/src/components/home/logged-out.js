import { useGlobalState } from "../../state";

export default function LoggedOut(props) {

    // Import global state variables for user name and login status
    const [, setIsLoggedIn] = useGlobalState('isLoggedIn');
    const [userName, setUserName] = useGlobalState('userName');

    // Login function 
    // Checks if user entered a name, if so Login state is set to true
    const login = () => {
        if (userName) {
            setIsLoggedIn(true);
        } else {
            alert("Please enter a name to login.")
        }
    }

    return (

        <div className="login-items">

            {/* Sets user name to inputted value */}
            <input className="login-input home-top-field" onChange={(event) => { setUserName(event.target.value) }} type="text" placeholder="Enter name to login"></input>

            {/* Calls login function on click of login button */}
            <button className="login-button home-bottom-field" onClick={login} >LOGIN</button>
        </div>
    )
}