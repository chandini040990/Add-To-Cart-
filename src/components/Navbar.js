import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = ({ cartCount, openCart }) => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/UserCart" onClick={openCart}>Cart ({cartCount})</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;



