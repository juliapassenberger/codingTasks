import Figure from 'react-bootstrap/Figure';
import storeImage1 from '../../images/store1.jpg';
import storeImage2 from '../../images/store2.jpg';
import TotalPrice from '../price/totalPrice';
import logo from '../../images/logos/logo-name-icon.png';
import './about.css';

export default function About() {

    return (
        <div className='about-page'>

            {/* Render totalPrice component */}
            <div className='heading-wrapper'>
                <TotalPrice id='price' ></TotalPrice>
            </div>

            {/* 2 Bootstrap figures incl. images */}

            {/* Image of logo and description of brand background */}
            <Figure className=' about-intro' id='about-top'>
                <Figure.Image id='logo-large'
                    width={171}
                    height={180}
                    alt="Logo"
                    src={logo}
                />
                <Figure.Caption>
                    Welcome to Shalour! Here at Shalour we deliver high-quality furnishings designed towards a modern, luxurious lifestyle ideal for your everyday needs.
                    Established in 1989, we have been delivering best-in class service combined with outstanding quality and timeless design.
                </Figure.Caption>
            </Figure>


            {/* Images of stores and contact details */}
            <Figure className='about-items about-contact' >
                <div className='store-images'>
                    <Figure.Image className='figure-image'
                        width={171}
                        height={180}
                        alt="Store Image"
                        src={storeImage2}
                    />
                    <Figure.Image className='figure-image'
                        width={171}
                        height={180}
                        alt="Store Image"
                        src={storeImage1}
                    />
                </div>

                <Figure.Caption>
                    <h3> Contact Us</h3>
                    Come see us for an in-person consultation at our London Chelsea branch. We offer tours of our model rooms as well as personalised recommendations based on photos of your home.
                    To schedule an appointment please contact us on:<br /> <br />
                    Tel: +44 123456789<br />
                    Email: hello@shalour.com
                </Figure.Caption>
            </Figure>

        </div>
    )

}