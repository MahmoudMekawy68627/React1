import React from 'react'
import nav from './nav.css';
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <div className='navbar-wrapper'>
            <h2>LOGO</h2>
            <ul className='nav-list'>
                <li>
                   <Link to="/">Home</Link> 
                   
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/register">Sign Up</Link>
                </li>
            </ul>



        </div>
    );
}

export default Navbar