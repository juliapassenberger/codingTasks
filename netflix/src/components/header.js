import './header.css';
import { IconContext } from "react-icons";
import { FaRotateRight } from "react-icons/fa6";


function Header(props) {

    // Destructuring the user object passed into the Header component
    let { title, description, link } = props.user;

    return (
        <div className="header">

            <header className='top-container'>

                {/* Image for the header of the page */}
                <img src={require(`../images/${link}`)} alt='film-banner'></img>


                {/* Icons on the right: replay button and age restriction icon  */}
                <div className='right-buttons'>

                    {/* Imported rotate icon for replay button */}
                    <div className='circle'>
                        <IconContext.Provider value={{ size: "23px", className: "global-class-name" }}>
                            <div><FaRotateRight /></div>
                        </IconContext.Provider>
                    </div>

                    {/* Age restriction icon */}
                    <div id='rating-wrapper'>
                        <div id='rating'>15</div>
                    </div>

                </div>

                {/* Div for the left side of the screen containing information about the displayed show/film in the header */}
                <div className='banner'>

                    {/* Title & Description */}
                    <div className='info'>
                        <div id='title'>{title}</div>
                        <div id='description'>{description}</div>
                    </div>


                    {/* Play button and More Info button */}
                    <div className='button-container'>
                        <button id='button-play'>
                            <span>Play</span>
                        </button>

                        <button id='button-more-info'>More Info</button>
                    </div>

                </div>

            </header>

        </div>
    )

}

export default Header;