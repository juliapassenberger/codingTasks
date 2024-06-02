import { useState } from "react";
import { IconContext } from "react-icons";
import { BsCheckCircle } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


// Component to add fixed or a chosen interest rate to balance
export default function AddInterest(props) {

    // State variable to contain the inputted interest rate from user
    const [number, setNumber] = useState();

    // Function to update state variable
    const handleInput = (event) => {
        setNumber(Number(event.target.value));
    }

    // Function to calculate the interest on the balance
    const calcInterest = (number) => { return props.balance * (1 + (number / 100)) }

    // Function to render the Bootstrap tooltips
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to apply
        </Tooltip>
    );

    return (
        <div className="add-interest balance-items">

            <section>
                <h2>Add interest that is due for your for your account balance</h2>

                <div className="calculate-interest">

                    {/* Elements to apply a 10% fixed interest rate */}
                    <div className="fixed-interest">
                        <p>Fixed interest:</p>

                        <div className="icon-alignment">
                            <span id="fixed-rate" className="rates">10%</span>

                            {/* Apply button with bootstrap tooltip and react tick icon (plus context.provider for custom styling) */}
                            <IconContext.Provider value={{ size: "1.5rem", className: "global-class-name" }}>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <span className="tick-icon" onClick={() => { props.updateBalance(calcInterest(10)) }}>
                                        <BsCheckCircle />
                                    </span>
                                </OverlayTrigger>
                            </IconContext.Provider>

                        </div>
                    </div>

                    {/* Elements to obtain a user-chosen interest rate and apply button */}
                    <div className="variable-interest">
                        <p>Variable interest:</p>

                        <div className="icon-alignment">

                            {/* Non-negative input field */}
                            <input id='interest-input' className="rates" type="number" min="0" onChange={handleInput} placeholder="Enter interest" ></input>

                            {/* Apply button with bootstrap tooltip and react tick icon (plus context.provider for custom styling) */}
                            <IconContext.Provider value={{ size: "1.5rem", className: "global-class-name" }}>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <span className="tick-icon" onClick={() => { props.updateBalance(calcInterest(number)) }}>
                                        <BsCheckCircle />
                                    </span>
                                </OverlayTrigger>
                            </IconContext.Provider>

                        </div>

                    </div>

                </div>
            </section >
        </div >
    )

}

