import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './accountBalance.css'
import { IconContext } from "react-icons";
import { BsCurrencyExchange } from "react-icons/bs";


export default function Navigation() {

    return (

        <div className='navigation'>

            {/* Left sidebar imported from react-pro-sidebar */}

            <Sidebar rootStyles={{ height: '100%', borderColor: '#a9a9a9', border: 'none', fontSize: '1.2rem', color: '#373c46' }}
                backgroundColor='#fff'
            >
                <Menu>
                    <MenuItem rootStyles={{ color: '#373c46', fontWeight: '700', fontSize: '1.7rem' }} >
                        <IconContext.Provider value={{ size: "2.8rem", className: "global-class-name" }}>
                            <BsCurrencyExchange />The Bank
                        </IconContext.Provider>
                    </MenuItem>
                    <MenuItem> Account</MenuItem>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Settings</MenuItem>
                    <MenuItem> Contact Us</MenuItem>
                </Menu>
            </Sidebar>

        </div >
    )

}