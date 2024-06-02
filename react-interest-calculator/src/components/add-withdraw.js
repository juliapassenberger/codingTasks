import { useState } from "react";


// Component to add or withdraw an absolute amount from the balance

export default function AddAndWithdraw(props) {

    // State variable to hold the amount to add/withdraw inputted by user
    const [number, setNumber] = useState('');

    // Function to update the state variable
    const handleInput = (event) => {
        setNumber(Number(event.target.value));
    }


    return (
        <div className="add-withdraw balance-items">

            <section>
                <h2>Add or withdraw a lump sum to/from your account balance</h2>

                {/* Input field for the user to enter a non-negative number */}
                <input className='default-input' type="number" min="0" onChange={handleInput} placeholder="Enter amount"></input>

                {/* Buttons to either add or withdraw the amount using the passed in function to update the balance state variable in the parent component */}
                <div className='add-withdraw-buttons'>
                    <button id='button-add' onClick={() => { props.updateBalance(props.balance + number) }}>Add</button>
                    <button id='button-withdraw' onClick={() => { props.updateBalance(props.balance - number) }}>Withdraw</button>
                </div>
            </section>

        </div >
    )
}

