import LoggedIn from "./logged-in";
import LoggedOut from "./logged-out";
import { useGlobalState } from '../../state';
import './home.css';

export default function Home() {

    // Use global state variables for user login status
    const [isLoggedIn,] = useGlobalState('isLoggedIn');


    return (
        <div className="header-wrapper">

            {/* Display different components depending on whether user is logged in or not */}
            <div className="login-wrapper">
                {isLoggedIn ? <LoggedIn ></LoggedIn> :
                    <LoggedOut ></LoggedOut>}
            </div>

        </div>
    )

}