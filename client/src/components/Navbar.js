import React from 'react'
import {NavLink} from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../images/nba_logo.png';

const Navbar = () => {
    return (
        <div className="nav">
                <img src={logo} alt="NBA Logo" width='70'/>
                <nav className='navLinks'>
                    <NavLink
                    to='/'
                    className='links'
                    >
                        Home
                    </NavLink>
                    {/* <NavLink>Play</NavLink> */}
                    <NavLink
                    to='/signin'
                    className='links'
                    >
                        Sign In
                    </NavLink>
                </nav>
        </div>
    )
}

export default Navbar
