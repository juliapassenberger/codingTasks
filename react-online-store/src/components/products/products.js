import ProductCards from './product-cards';
import TotalPrice from '../price/totalPrice';
import './products.css'


export default function Products() {


    return (

        // Parent component for the product page containing individual cards 
        <div className='product-page'>

            {/* Display totalPrice component in the top right */}
            <div className='heading-wrapper'>
                <TotalPrice className='price' />
            </div>

            <h2 className='heading'>View our selection of luxurious comfort seats.</h2>

            {/* Render child component to display product cards */}
            <ProductCards className='product-list' />

        </div>
    )
}