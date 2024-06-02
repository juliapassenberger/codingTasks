import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import './footer.css';


export default function Footer() {


    return (

        <div className='footer-container'>
            <hr></hr>

            <div className='footer-wrapper'>

                {/* Links to social media using react icons*/}
                <div className='social-media'>
                    <IconContext.Provider value={{ size: "23px", className: "global-class-name" }}>
                        <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer"><FaFacebookF /></a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
                        <a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer"><FaInstagram /></a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
                        <a href="https://x.com/" target={'_blank'} rel="noreferrer"><FaTwitter /></a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
                        <a href="https://www.youtube.com/" target={'_blank'} rel="noreferrer"><FaYoutube /></a>
                    </IconContext.Provider>

                </div>

                {/* Grid of other links displayed in the footer (non-functional) */}
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
                    <div>Cookie Preferences</div>
                    <div>Terms of Use</div>
                    <div>Corporate Information</div>
                </div>


                {/* Link to unsplash */}
                <div id='website-link'>All images from: <a href='https://unsplash.com/' target={'_blank'} rel="noreferrer"> https://unsplash.com/ </a> </div>
            </div>
        </div>
    )
}
