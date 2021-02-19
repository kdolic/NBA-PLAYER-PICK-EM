import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../images/nba_logo.png';

const Navbar = () => {
    return (
        <div className="nav py-2 flex">
                <img src={logo} alt="NBA Logo" width='70' className='ml-60' />
                <nav className='flex my-0 mx-auto'>
                    <NavLink
                    to='/'
                    className='flex items-center mr-6 text-base no-underline text-white hover:text-gray-500'
                    >
                        Home
                    </NavLink>
                    {/* <NavLink>Play</NavLink> */}
                    <NavLink
                    to='/signin'
                    className='flex items-center mr-6 text-base no-underline text-white hover:text-gray-500'
                    >
                        Sign In
                    </NavLink>
                </nav>
        </div>
    )
}

export default Navbar
