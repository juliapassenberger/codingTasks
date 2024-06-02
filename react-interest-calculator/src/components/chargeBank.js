import { useState } from "react";
import { IconContext } from "react-icons";
import { BsCheckCircle } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Component to charge bank fees
export default function ChargeBankFees(props) {

    // State variable to hold the inputted amount of fees
    const [fees, setFees] = useState(0);

    // State variable to hold state of toggle button: either % or £
    const [operation, setOperation] = useState('%');

    // Functions to set the two state variables
    const handleInput = (event) => {
        setFees(Number(event.target.value));
    }

    const updateOperation = (event) => {
        setOperation(event.target.innerText);
    }

    // Function to calculate the fees depending on the toggled option for % or £
    const calculateFees = () => {
        if (operation === "£") {
            return props.balance - fees;
        } return props.balance * ((1 - (fees / 100)))
    }

    // Function to render Bootstrap tooltip
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to apply
        </Tooltip>
    );


    return (

        <div className="charge-bank balance-items">
            <section>
                <h2>Pay your bank fees as share of your balance or as lump sum </h2>

                {/* Input field for user to enter amount to be charged */}
                <input className='default-input' min="0" type="number" onChange={handleInput} placeholder='Enter bank fees'></input>

                {/* Toggle button for user to choose between a share (%) or a lump sum (£) */}
                <div className="icon-alignment">
                    <div className="toggle-button">

                        {/* Conditional CSS: Depending on the state variable, either the % or £ button will be highlighted */}
                        <div className={`toggle-options ${operation === '%' ? 'active' : ''}`}
                            id="percent" onClick={updateOperation}>%</div>

                        <div className={`toggle-options ${operation === '£' ? 'active' : ''}`} id="pounds" onClick={updateOperation} >£</div>
                    </div>

                    {/* Apply button with bootstrap tooltip and react tick icon (plus context.provider for custom styling)  */}
                    <IconContext.Provider value={{ size: "1.5rem", className: "global-class-name" }}>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <div className="tick-icon" id='click-div' onClick={() => { props.updateBalance(calculateFees(fees)) }}><BsCheckCircle /></div>
                        </OverlayTrigger>
                    </IconContext.Provider>

                </div>
            </section>
        </div>

    )
}