// Footer for Netflix app

import './footer.css'
import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


function Footer() {

    return (

        <div className='footer-container'>

            {/* Links to social media */}
            <div className='social-media'>
                <IconContext.Provider value={{ size: "23px", className: "global-class-name" }}>
                    <a href="https://www.facebook.com/NetflixUK" target={'_blank'} rel="noreferrer"><FaFacebookF /></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
                    <a href="https://www.instagram.com/NetflixUK/" target={'_blank'} rel="noreferrer"><FaInstagram /></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
                    <a href="https://x.com/NetflixUK" target={'_blank'} rel="noreferrer"><FaTwitter /></a>

                </IconContext.Provider>

                <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
                    <a href="https://www.youtube.com/user/netflixuk" target={'_blank'} rel="noreferrer"><FaYoutube /></a>
                </IconContext.Provider>

            </div>

            {/* Grid of other links displayed in the footer */}
            <div className='other-links'>

                <div>Audio Description</div>
                <div>Investor Relations</div>
                <div>Privacy</div>
                <div>Contact Us</div>
                <div>Help Centre</div>
                <div>Jobs</div>
                <div>Legal Notices</div>
                <div>Advert Choices</div>
                <div>Gift Cards</div>
                <div>Netflix Shop</div>
                <div>Cookie Preferences</div>
                <div>Media Centre</div>
                <div>Terms of Use</div>
                <div>Corporate Information</div>
            </div>

            {/* Other information */}
            <div className='service-code'>
                <span>Service Code</span>
            </div>
            <div id='inc'>1997-2024 Netflix, Inc.</div>

            {/* Link to original Netflix page */}
            <div id='website-link'>Original website netflix.com used as a model for this project. All images from unsplash.com.</div>


        </div>
    )
}

export default Footer;