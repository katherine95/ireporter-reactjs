import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav>
            <ul>
                <li><a href="" className="logo">iReporter</a></li>
                <li><a href="" id="logout"><Link to='/'>Logout</Link></a></li>
                <li><a href=""><Link to='/signup'>Register</Link></a></li>
                <li><a href=""><Link to='/'>Login</Link></a></li>
            </ul>
        </nav>
        </div>
    );
}
