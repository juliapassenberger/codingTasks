import { useEffect, useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import products from './product-details';
import colourPalette from './product-colours';
import { useGlobalState } from '../../state';
import './products.css'


export default function ProductCards() {

    // Import global state variables for values required across pages
    const [totalPrice, setTotalPrice] = useGlobalState('totalPrice');
    const [, setClickedBuy] = useGlobalState('clickedBuy');

    // State variable for the colours of the drop-down button
    const [allColours, setAllColours] = useState({});

    // Variable to track whether component is rendered for the first time
    const firstRender = useRef(true);


    // useEffect hook for the first rendering of the page
    useEffect(() => {

        // Update the state variable with the colours stored in local storage or {} when the local storage doesn't exist yet
        setAllColours(JSON.parse(localStorage.getItem('storedColours')) || {});

    }, [])


    // Function to handle click on a colour from the dropdown
    const dropdownClick = (event, productId) => {

        // Finding the colour code (hex) of the selected dropdown colour
        let selectedColour = event.target.innerHTML;
        let colourIndex = colourPalette.findIndex((element) => element.colour === selectedColour);
        let colourCode = colourPalette[colourIndex].code;

        // Update the colour state variable 
        setAllColours((allColours) => ({
            // Add colours that are already stored in the variable
            ...allColours,
            // Add the colour that was selected from the drop-down
            [productId]: {
                selectedColour,
                colourCode
            }
        }))

    }

    // useEffect hook to update local storage when colour state variable was changed
    useEffect(() => {
        // Check if the page was rendered for the first time
        // If so, allColours==locally stored colours so no need to set local storage
        if (firstRender.current === true) {
            console.log("Component was rendered for the first time.")
            firstRender.current = false;

        } else {
            // Update colours in local storage
            localStorage.setItem('storedColours', JSON.stringify(allColours));
        }
    }, [allColours])


    // Event handler for click of buy button
    const clickBuy = (productId) => {

        // Set clickedBuy state variable to true -> totalPrice should now be displayed
        setClickedBuy(true)

        // Find the price of the product the user clicked on in the product-details data;
        let currentProduct = products.findIndex((element) => element.id === productId);
        let addedPrice = products[currentProduct].price;

        // Add price of clicked product to total Price
        setTotalPrice(totalPrice + addedPrice)
    }



    return (
        <div className='product-cards'>

            {/* Map all the products defined in the product-details data */}
            {products.map((product) => (

                // Bootstrap Card component
                < Card key={product.id} className='card' style={{ width: '20rem' }
                }>
                    {/* Fill card component with data of the mapped product */}
                    <Card.Img className='card-image' variant="top" src={require(`./product-images/${product.image}`)} />
                    <Card.Body>
                        <Card.Title className='name'>{product.name}</Card.Title>
                        <Card.Text className='description'>
                            {product.description}
                        </Card.Text>
                        <Card.Text className='price'>
                            £{product.price}
                        </Card.Text>

                        {/* Set up buttons to be displayed in the cards */}
                        <div className='cta-buttons'>

                            {/* Bootstrap dropdown component */}
                            <Dropdown className='dropdown-button' data-bs-theme="light">
                                <Dropdown.Toggle style={{ color: allColours[product.id]?.colourCode || 'black' }} className='dropdown-text' variant="outline-secondary" id="dropdown-basic">
                                    Select colour
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    {/* Map available colours of each product defined in the product-details data into the drop-down options */}
                                    {product.colours.map((colour, index) => (
                                        <Dropdown.Item key={index} onClick={(event) => dropdownClick(event, product.id)} >{colour}</Dropdown.Item>
                                    ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Buy button */}
                            <Button id='buy-button' className='btn-sm' onClick={() => clickBuy(product.id)} >Buy now</Button>
                        </div>
                    </Card.Body>
                </Card>
            )
            )
            }

        </div >
    )

}