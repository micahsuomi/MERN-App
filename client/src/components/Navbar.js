import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/students">Students</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/students/add">Add Student</NavLink></li>
                </ul>
                </nav>
        </div>
    )
}

export default Navbar;
