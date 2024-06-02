import { useState } from "react";
import AddAndWithdraw from "./add-withdraw";
import AddInterest from "./addInterest";
import ChargeBankFees from "./chargeBank";
import './accountBalance.css';

// Parent component for the interest calculator
export default function Balance() {

    // State variable for the balance
    const [balance, setBalance] = useState(1000);


    // Function to update the state variable, only if the new balance is not negative
    function updateBalance(amount) {

        // Round balance to 2 decimals
        if (amount >= 0) {
            setBalance(Math.round(amount * 100) / 100);
        }
        // Alert user that balance would become negative
        else {
            alert(`By withdrawing money, your balance would go into negative at ${amount}. \nSpeak to an adivsor to set up overdraft.`)
        }

    }

    return (

        <div className='parent-balance'>

            <h1>Hello!</h1>

            {/* Displays the current balance */}
            <div id='balance'>
                <p>£ {balance}</p>
            </div>
            <div id='balance-description'>Your current balance</div>

            {/* Child components: pass in both the balance state variable and the function to set the balance */}
            <div className="balance-actions">
                <AddAndWithdraw balance={balance} updateBalance={updateBalance} />

                <AddInterest balance={balance} updateBalance={updateBalance} />

                <ChargeBankFees balance={balance} updateBalance={updateBalance} />

            </div>
        </div >

    )
}