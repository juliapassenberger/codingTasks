import { useGlobalState } from "../../state";
import './totalPrice.css';


export default function TotalPrice() {

    // Import global state variables for price and whether user clicked buy button
    const [totalPrice,] = useGlobalState('totalPrice');
    const [clickedBuy,] = useGlobalState('clickedBuy');


    return (
        <div className='total-price'>

            {/* If user clicked buy, display the total Price */}
            {clickedBuy &&

                // Round total price to 2 decimals
                <h2 className='price'>Total price: £{Math.floor(totalPrice * 100) / 100}</h2>
            }
        </div>
    )
}